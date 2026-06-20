import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';

const inputPath = 'public/mascot.png';
const threshold = 240;

const image = sharp(inputPath);
const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const output = Buffer.from(data);

for (let i = 0; i < width * height; i++) {
  const offset = i * channels;
  const r = output[offset];
  const g = output[offset + 1];
  const b = output[offset + 2];

  if (r >= threshold && g >= threshold && b >= threshold) {
    output[offset + 3] = 0; // alpha を 0 に
  }
}

const result = await sharp(output, {
  raw: { width, height, channels },
}).png().toBuffer();

writeFileSync(inputPath, result);
console.log(`Done: ${inputPath} (${width}x${height})`);
