import { cp, mkdir, rm } from "node:fs/promises";

const distDir = new URL("../dist/", import.meta.url);
const filesToCopy = ["index.html", "assets"];

await rm(distDir, { recursive: true, force: true });
await mkdir(distDir, { recursive: true });

for (const file of filesToCopy) {
  await cp(new URL(`../${file}`, import.meta.url), new URL(`../dist/${file}`, import.meta.url), {
    recursive: true,
  });
}
