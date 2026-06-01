/**
 * Generates WebP copies in public/ for OptimizedImage.
 * Run: npm run optimize-images
 */
import { readdir, stat } from 'node:fs/promises';
import { join, extname, basename, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const publicDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');
const extensions = new Set(['.jpeg', '.jpg', '.png']);

const files = await readdir(publicDir);

for (const file of files) {
  const ext = extname(file).toLowerCase();
  if (!extensions.has(ext)) continue;

  const input = join(publicDir, file);
  const output = join(publicDir, `${basename(file, ext)}.webp`);

  const info = await stat(input);
  await sharp(input)
    .webp({ quality: 82 })
    .toFile(output);

  const outStat = await stat(output);
  console.log(
    `${file} → ${basename(output)} (${Math.round(info.size / 1024)}KB → ${Math.round(outStat.size / 1024)}KB)`
  );
}

console.log('Done.');
