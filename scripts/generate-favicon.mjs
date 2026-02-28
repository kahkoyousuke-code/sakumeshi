import sharp from 'sharp';
import { writeFileSync } from 'fs';

// 32x32 PNG に縮小
const pngBuffer = await sharp('public/mascot.png')
  .resize(32, 32)
  .png()
  .toBuffer();

// ICO ファイルを構築（PNG データを埋め込む形式）
const icoHeader = Buffer.alloc(6);
icoHeader.writeUInt16LE(0, 0); // reserved
icoHeader.writeUInt16LE(1, 2); // type: 1 = ICO
icoHeader.writeUInt16LE(1, 4); // 画像数: 1

const icoEntry = Buffer.alloc(16);
icoEntry.writeUInt8(32, 0);                       // width
icoEntry.writeUInt8(32, 1);                       // height
icoEntry.writeUInt8(0, 2);                        // colorCount (0 = パレットなし)
icoEntry.writeUInt8(0, 3);                        // reserved
icoEntry.writeUInt16LE(1, 4);                     // color planes
icoEntry.writeUInt16LE(32, 6);                    // bits per pixel
icoEntry.writeUInt32LE(pngBuffer.length, 8);      // image data size
icoEntry.writeUInt32LE(22, 12);                   // offset (6 + 16 = 22)

const icoBuffer = Buffer.concat([icoHeader, icoEntry, pngBuffer]);
writeFileSync('public/favicon.ico', icoBuffer);
console.log(`Done: public/favicon.ico (${icoBuffer.length} bytes)`);
