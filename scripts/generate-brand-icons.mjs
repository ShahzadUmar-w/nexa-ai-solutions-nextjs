import sharp from "sharp";
import toIco from "to-ico";
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(root, "public", "Nexa-AI-new-logo.png");

const pngOutputs = [
  { file: path.join(root, "src", "app", "icon.png"), size: 32 },
  { file: path.join(root, "src", "app", "apple-icon.png"), size: 180 },
  { file: path.join(root, "public", "favicon-96x96.png"), size: 96 },
  { file: path.join(root, "public", "apple-touch-icon.png"), size: 180 },
  { file: path.join(root, "public", "web-app-manifest-192x192.png"), size: 192 },
  { file: path.join(root, "public", "web-app-manifest-512x512.png"), size: 512 },
];

await mkdir(path.join(root, "src", "app"), { recursive: true });

for (const { file, size } of pngOutputs) {
  await sharp(source)
    .resize(size, size, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile(file);
}

const icoSizes = [16, 32, 48];
const icoBuffers = await Promise.all(
  icoSizes.map((size) =>
    sharp(source)
      .resize(size, size, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toBuffer(),
  ),
);
const ico = await toIco(icoBuffers);

for (const icoPath of [
  path.join(root, "src", "app", "favicon.ico"),
  path.join(root, "public", "favicon.ico"),
]) {
  await writeFile(icoPath, ico);
}

console.log("Generated Nexa favicon.ico, app/icon.png, and PWA icons.");
