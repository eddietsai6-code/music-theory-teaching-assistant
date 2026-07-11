import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { getTheoryCourseDetail, getTheoryCoursePickerItems } from "../assets/app.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");
const repoRoot = resolve(projectRoot, "..");
const tmpRoot = resolve(repoRoot, "tmp", "discover-theory-asset-export");
const force = process.argv.includes("--force");

const studentPdfs = {
  zh: {
    "grade-1": "E:\\英皇乐理\\发现乐理中文版本\\发现乐理中文版第一级.pdf",
    "grade-2": "E:\\英皇乐理\\发现乐理中文版本\\发现乐理中文版第二级.pdf",
    "grade-3": "E:\\英皇乐理\\发现乐理中文版本\\发现乐理中文版第三级.pdf",
    "grade-4": "E:\\英皇乐理\\发现乐理中文版本\\发现乐理中文版第四级.pdf",
    "grade-5": "E:\\英皇乐理\\发现乐理中文版本\\发现乐理中文版第五级.pdf",
  },
  en: {
    "grade-1": "E:\\英皇乐理\\发现乐理英文版本\\发现乐理1级.pdf",
    "grade-2": "E:\\英皇乐理\\发现乐理英文版本\\发现乐理2级.pdf",
    "grade-3": "E:\\英皇乐理\\发现乐理英文版本\\发现乐理3级.pdf",
    "grade-4": "E:\\英皇乐理\\发现乐理英文版本\\发现乐理4级.pdf",
    "grade-5": "E:\\英皇乐理\\发现乐理英文版本\\发现乐理5级.pdf",
  },
};

const answerPdf = "E:\\英皇乐理\\发现乐理英文版本\\发现乐理1-5级配套答案.pdf";
const gradeIds = ["grade-1", "grade-2", "grade-3", "grade-4", "grade-5"];

function sourcePdfForPage(gradeId, page) {
  if (page.src.includes(`${gradeId}-answers-original`)) return answerPdf;
  if (page.src.includes(`${gradeId}-original`)) return studentPdfs.en[gradeId];
  return studentPdfs.zh[gradeId];
}

function renderPdfPage(pdfPath, pdfPage, workDir) {
  rmSync(workDir, { recursive: true, force: true });
  mkdirSync(workDir, { recursive: true });
  const prefix = join(workDir, "page");
  execFileSync("pdftoppm", ["-f", String(pdfPage), "-l", String(pdfPage), "-r", "170", "-png", pdfPath, prefix], {
    stdio: "ignore",
  });

  const rendered = readdirSync(workDir).find((name) => name.startsWith("page-") && name.endsWith(".png"));
  if (!rendered) throw new Error(`pdftoppm did not render ${pdfPath} page ${pdfPage}`);
  return join(workDir, rendered);
}

function convertToWebp(sourcePng, outputPath) {
  mkdirSync(dirname(outputPath), { recursive: true });
  execFileSync(
    "magick",
    [
      sourcePng,
      "-fuzz",
      "4%",
      "-trim",
      "+repage",
      "-resize",
      "1565x2165>",
      "-strip",
      "-quality",
      "86",
      outputPath,
    ],
    { stdio: "ignore" },
  );
}

function collectTasks() {
  const tasks = new Map();

  for (const gradeId of gradeIds) {
    for (const pickerItem of getTheoryCoursePickerItems(gradeId)) {
      const course = getTheoryCourseDetail(pickerItem.id, gradeId);
      for (const source of course.scoreSources.filter((item) => item.id !== "compare")) {
        for (const section of source.sections) {
          for (const page of section.pages) {
            const relPath = page.src.replace("./", "");
            const outputPath = resolve(projectRoot, relPath);
            if (!force && existsSync(outputPath)) continue;
            tasks.set(outputPath, {
              gradeId,
              courseId: course.id,
              sourceId: source.id,
              kind: page.kind,
              pdfPath: sourcePdfForPage(gradeId, page),
              pdfPage: page.sourcePage,
              outputPath,
            });
          }
        }
      }
    }
  }

  return [...tasks.values()];
}

const tasks = collectTasks();
let exported = 0;

for (const [index, task] of tasks.entries()) {
  const workDir = join(tmpRoot, `${String(index + 1).padStart(4, "0")}-${task.gradeId}-${task.courseId}-${task.sourceId}-${task.kind}`);
  const sourcePng = renderPdfPage(task.pdfPath, task.pdfPage, workDir);
  convertToWebp(sourcePng, task.outputPath);
  exported += 1;
  if (exported === 1 || exported % 25 === 0 || exported === tasks.length) {
    console.log(`exported ${exported}/${tasks.length}: ${task.gradeId} ${task.courseId} ${task.sourceId} ${task.kind} p.${task.pdfPage}`);
  }
}

console.log(`asset export complete: ${exported} file(s) written, ${tasks.length - exported} skipped`);
