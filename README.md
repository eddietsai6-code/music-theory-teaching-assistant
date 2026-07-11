# Music Theory Teaching Assistant

A static music theory teaching workspace for organizing lesson modules, workbook covers, course drawers, resource slots, and zero-data starter states.

## Local Preview

Serve the folder with any static server:

```powershell
python -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

## Project Structure

```text
index.html
assets/
  app.mjs
  styles.css
  covers/
```

## Verification

```powershell
npm test
```

## Cloudflare Pages

Use these build settings:

```text
Production branch: main
Build command: npm run build
Build output directory: dist
```

The site is plain HTML, CSS, and JavaScript. The build step copies the static files into `dist/` for Cloudflare Pages.
