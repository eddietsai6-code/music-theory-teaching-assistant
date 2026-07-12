"""Generate Grade 1 OCR selection data for the web reader.

The visible page remains the English original image. This script uses English
OCR for selectable coordinates and Chinese OCR from the matching Chinese page
as the note shown after a user box-selects text.
"""

from __future__ import annotations

import csv
import io
import json
import re
import subprocess
from dataclasses import dataclass
from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
EN_ROOT = ROOT / "assets" / "scores" / "grade-1-original"
ZH_ROOT = ROOT / "assets" / "scores" / "grade-1"
OUT_FILE = ROOT / "assets" / "g1-ocr-data.mjs"

COURSE_TITLES = {
    "course-01": "Rhythm (Part 1)",
    "course-02": "Pitch (Part 1)",
    "course-03": "Rhythm (Part 2)",
    "course-04": "Pitch (Part 2)",
    "course-05": "Rhythm (Part 3)",
    "course-06": "Scales",
    "course-07": "Keys & Key Signatures",
    "course-08": "Intervals",
    "course-09": "Tonic Triads",
    "course-10": "Terms & Signs",
    "course-11": "Music in Context",
}

GLOSSARY = {
    "rhythm": "节奏",
    "pitch": "音高",
    "time values": "时值",
    "time value": "时值",
    "pulse": "脉动",
    "beats": "拍",
    "beat": "拍",
    "bar": "小节",
    "metre": "拍子",
    "time signatures": "拍号",
    "time signature": "拍号",
    "semibreve": "全音符",
    "minim": "二分音符",
    "crotchet": "四分音符",
    "quaver": "八分音符",
    "rest": "休止符",
    "rests": "休止符",
    "dotted": "附点",
    "stave": "五线谱",
    "staff": "五线谱",
    "clef": "谱号",
    "treble clef": "高音谱号",
    "bass clef": "低音谱号",
    "ledger line": "加线",
    "scale": "音阶",
    "key": "调",
    "key signature": "调号",
    "sharp": "升号",
    "flat": "降号",
    "natural": "还原号",
    "interval": "音程",
    "triad": "三和弦",
    "tonic": "主音",
    "exercise": "练习",
    "complete": "完成",
    "circle": "圈出",
    "answer": "答案",
    "question": "问题",
    "note": "音符",
    "notes": "音符",
    "counts": "拍",
    "count": "拍",
}


@dataclass
class OcrLine:
    text: str
    left: int
    top: int
    width: int
    height: int
    confidence: float
    order: int

    @property
    def xmid(self) -> float:
        return self.left + self.width / 2

    @property
    def ymid(self) -> float:
        return self.top + self.height / 2


def cjk_count(text: str) -> int:
    return len(re.findall(r"[\u4e00-\u9fff]", text))


def alnum_count(text: str) -> int:
    return len(re.findall(r"[A-Za-z0-9\u4e00-\u9fff]", text))


def clean_common(text: str) -> str:
    text = text.replace("\u200b", "")
    text = text.replace("|", " ")
    text = re.sub(r"\s+", " ", text).strip()
    return text


def clean_zh(text: str) -> str:
    text = clean_common(text)
    text = re.sub(r"\s*([，。；：、！？）》])", r"\1", text)
    text = re.sub(r"([（《“])\s*", r"\1", text)
    text = re.sub(r"([\u4e00-\u9fff])\s+([\u4e00-\u9fff])", r"\1\2", text)
    text = text.replace(" ,", "，").replace(" .", "。")
    return text


def join_tokens(tokens: list[str], lang: str) -> str:
    if lang == "zh":
        return clean_zh(" ".join(tokens))
    return clean_common(" ".join(tokens))


def run_tesseract(image_path: Path, lang: str) -> str:
    command = [
        "tesseract",
        str(image_path),
        "stdout",
        "-l",
        lang,
        "--psm",
        "6",
        "tsv",
    ]
    result = subprocess.run(
        command,
        cwd=ROOT,
        capture_output=True,
        text=True,
        encoding="utf-8",
        errors="replace",
        check=False,
    )
    if not result.stdout.strip():
        raise RuntimeError(f"Tesseract returned no TSV for {image_path}: {result.stderr}")
    return result.stdout


def parse_tsv(tsv_text: str, lang: str) -> list[OcrLine]:
    groups: dict[tuple[str, str, str], list[dict[str, str]]] = {}
    reader = csv.DictReader(io.StringIO(tsv_text), delimiter="\t")
    for row in reader:
        if row.get("level") != "5":
            continue
        text = clean_common(row.get("text", ""))
        if not text:
            continue
        key = (row.get("block_num", "0"), row.get("par_num", "0"), row.get("line_num", "0"))
        groups.setdefault(key, []).append(row)

    lines: list[OcrLine] = []
    for order, rows in enumerate(groups.values(), start=1):
        tokens: list[str] = []
        lefts: list[int] = []
        tops: list[int] = []
        rights: list[int] = []
        bottoms: list[int] = []
        confidences: list[float] = []
        for row in rows:
            token = clean_common(row.get("text", ""))
            if not token:
                continue
            try:
                left = int(float(row["left"]))
                top = int(float(row["top"]))
                width = int(float(row["width"]))
                height = int(float(row["height"]))
                conf = float(row.get("conf", "-1"))
            except (KeyError, ValueError):
                continue
            tokens.append(token)
            lefts.append(left)
            tops.append(top)
            rights.append(left + width)
            bottoms.append(top + height)
            if conf >= 0:
                confidences.append(conf)

        text = join_tokens(tokens, "zh" if lang.startswith("zh") else "en")
        if not should_keep_line(text, lang):
            continue
        confidence = sum(confidences) / len(confidences) if confidences else 0
        lines.append(
            OcrLine(
                text=text,
                left=min(lefts),
                top=min(tops),
                width=max(rights) - min(lefts),
                height=max(bottoms) - min(tops),
                confidence=confidence,
                order=order,
            )
        )

    return sorted(lines, key=lambda line: (line.top, line.left))


def should_keep_line(text: str, lang: str) -> bool:
    if len(text) < 2:
        return False
    if alnum_count(text) < 2:
        return False
    if lang.startswith("zh") and cjk_count(text) == 0 and len(text) < 5:
        return False
    if re.fullmatch(r"[vVyYwW¥￥\s.,:;'\-_/\\]+", text):
        return False
    return True


def fallback_translate(text: str) -> str:
    lower = text.lower()
    hits = []
    for source, target in GLOSSARY.items():
        if re.search(rf"\b{re.escape(source)}\b", lower):
            hits.append(f"{source}: {target}")
    if hits:
        return "；".join(dict.fromkeys(hits))
    if re.search(r"exercise\s+\d+", lower):
        return re.sub(r"exercise\s+(\d+)", r"练习 \1", lower, flags=re.I)
    return f"待校对：{text}"


def best_chinese_note(en_line: OcrLine, zh_lines: list[OcrLine], en_size: tuple[int, int], zh_size: tuple[int, int]) -> str:
    if not zh_lines:
        return fallback_translate(en_line.text)

    en_w, en_h = en_size
    zh_w, zh_h = zh_size
    en_x = en_line.xmid / en_w
    en_y = en_line.ymid / en_h

    best_line: OcrLine | None = None
    best_score = 999.0
    for zh_line in zh_lines:
        zh_x = zh_line.xmid / zh_w
        zh_y = zh_line.ymid / zh_h
        has_cjk = cjk_count(zh_line.text) > 0
        score = abs(en_y - zh_y) * 1.8 + abs(en_x - zh_x) * 0.55
        if not has_cjk:
            score += 0.25
        if zh_line.confidence < 25:
            score += 0.15
        if score < best_score:
            best_score = score
            best_line = zh_line

    if best_line and (cjk_count(best_line.text) > 0 or best_line.confidence >= 50):
        return best_line.text
    return fallback_translate(en_line.text)


def image_size(path: Path) -> tuple[int, int]:
    with Image.open(path) as image:
        return image.size


def make_segment(course_id: str, page_index: int, line_index: int, line: OcrLine, zh: str, size: tuple[int, int]) -> dict[str, object]:
    width, height = size
    pad_x = max(3, round(width * 0.003))
    pad_y = max(3, round(height * 0.002))
    left = max(0, line.left - pad_x)
    top = max(0, line.top - pad_y)
    right = min(width, line.left + line.width + pad_x)
    bottom = min(height, line.top + line.height + pad_y)
    return {
        "id": f"g1-{course_id.replace('course-', 'c')}-p{page_index + 1:02d}-s{line_index + 1:03d}",
        "text": line.text,
        "zh": zh,
        "x": round(left / width * 100, 3),
        "y": round(top / height * 100, 3),
        "w": round((right - left) / width * 100, 3),
        "h": round((bottom - top) / height * 100, 3),
        "fs": 1.05,
    }


def build_page(course_id: str, page_index: int, en_image: Path, zh_image: Path) -> dict[str, object]:
    en_size = image_size(en_image)
    zh_size = image_size(zh_image) if zh_image.exists() else en_size
    en_lines = parse_tsv(run_tesseract(en_image, "eng"), "en")
    zh_lines = parse_tsv(run_tesseract(zh_image, "chi_sim+eng"), "zh") if zh_image.exists() else []

    segments = []
    for line_index, line in enumerate(en_lines):
        zh = best_chinese_note(line, zh_lines, en_size, zh_size)
        segments.append(make_segment(course_id, page_index, line_index, line, zh, en_size))

    page_number = page_index + 1
    return {
        "id": f"g1-{course_id}-p{page_number:02d}",
        "pageLabel": f"STUDENT {page_number:02d}",
        "sourceLabel": f"EN source page {page_number:02d}",
        "src": f"./assets/scores/grade-1-original/{course_id}/student-page-{page_number:02d}.webp",
        "alt": f"Grade 1 {COURSE_TITLES[course_id]} student page {page_number}",
        "ocrSegments": segments,
    }


def build_course(course_dir: Path) -> tuple[str, dict[str, object]]:
    course_id = course_dir.name
    en_pages = sorted(course_dir.glob("student-page-*.webp"))
    pages = []
    for index, en_image in enumerate(en_pages):
        zh_image = ZH_ROOT / course_id / en_image.name
        print(f"{course_id} page {index + 1:02d}: OCR English + Chinese")
        pages.append(build_page(course_id, index, en_image, zh_image))

    return course_id, {
        "label": "English original with Chinese selection notes",
        "note": "Box-select printed English text. The note uses OCR from the matched Chinese edition as the terminology reference.",
        "badge": f"Grade 1 / {len(pages)} student pages",
        "pages": pages,
    }


def main() -> None:
    data: dict[str, object] = {}
    for course_dir in sorted(EN_ROOT.glob("course-*")):
        if course_dir.name not in COURSE_TITLES:
            continue
        course_id, course_data = build_course(course_dir)
        data[course_id] = course_data

    OUT_FILE.write_text(
        "export const G1_OCR_SELECTION_SAMPLES = "
        + json.dumps(data, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )
    total_pages = sum(len(course["pages"]) for course in data.values())
    total_segments = sum(len(page["ocrSegments"]) for course in data.values() for page in course["pages"])
    print(f"Wrote {OUT_FILE}")
    print(f"Generated {len(data)} courses, {total_pages} pages, {total_segments} OCR segments")


if __name__ == "__main__":
    main()
