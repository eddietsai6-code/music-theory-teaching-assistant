# Grade 1 OCR Translation Workflow

This project keeps one visible textbook version: the clean English original page image.
Chinese appears only as a selection note after the learner box-selects printed text.

## Source Principle

1. The display master is `assets/scores/grade-1-original/**/student-page-*.webp`.
2. The Chinese reference is `assets/scores/grade-1/**/student-page-*.webp`.
3. OCR is generated per page:
   - English OCR provides selectable coordinates.
   - Chinese OCR provides the matching note text.
4. The generated web data lives in `assets/g1-ocr-data.mjs`.
5. The app renders the English page image unchanged and overlays invisible OCR line/semantic blocks.

## Current Interaction

- Drag or touch-drag a rectangle over any printed text on the page.
- Every OCR block intersecting the rectangle becomes highlighted.
- A floating note shows Chinese first, with the selected English OCR text below it.
- This is block selection, not hover translation and not word-by-word translation.

## Regeneration

From `teaching-module`:

```powershell
python tools\generate_g1_ocr_data.py
```

Then verify:

```powershell
node --test ..\tests\teaching-module.test.mjs
npm run build
```

## Deployment Checklist

1. Regenerate OCR data if source images changed.
2. Run the Node test suite and static build.
3. Commit the changed site files.
4. Push `main` to GitHub.
5. Deploy the built site to Cloudflare Pages.
6. Open the production URL and box-select text in at least course 01 and one later course.

## Known Limits

- OCR boxes are line/semantic-block level. They are intentionally not individual words.
- Diagrams, music notes, and decorative icons remain part of the original image. They may not produce reliable OCR text.
- If a Chinese OCR line is noisy, the generator falls back to a small music-theory glossary so the note is never empty.
