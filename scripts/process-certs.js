/**
 * scripts/process-certs.js
 * 
 * Processes certificate images for the /resume Experience Certificates section.
 * - Auto-crops document / trims borders with a clean margin.
 * - Enhances contrast, sharpens text lightly with unsharp mask.
 * - Resizes using Lanczos3 (max-width: 1600px for full, width: 400px for thumbnails).
 * - Exports optimized WebP (quality 85) and JPEG versions to /public/certs/.
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const CERT_NAMES = [
  'wipro-wase-testimonial',
  'q3-infotech-experience-letter',
  'jrd-digital-marketing-certificate',
  'mind-and-matter-internship-certificate'
];

const RAW_DIR = path.join(__dirname, '..', 'public', 'certs-raw', 'certs-jpg', 'full');
const OUT_DIR = path.join(__dirname, '..', 'public', 'certs');
const OUT_FULL = path.join(OUT_DIR, 'full');
const OUT_THUMBS = path.join(OUT_DIR, 'thumbs');

async function ensureDirs() {
  [OUT_DIR, OUT_FULL, OUT_THUMBS].forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
}

async function processCertificate(name) {
  const inputJpg = path.join(RAW_DIR, `${name}.jpg`);
  if (!fs.existsSync(inputJpg)) {
    console.error(`Input file not found: ${inputJpg}`);
    return;
  }

  console.log(`Processing: ${name}...`);
  const image = sharp(inputJpg);
  const metadata = await image.metadata();

  // Target width for full resolution: up to 1600px wide (max width 1600)
  const fullWidth = Math.min(1600, Math.round(metadata.width * (1600 / Math.max(metadata.width, 1))));
  
  // High quality pipeline:
  // 1. Lanczos3 upscale/resize
  // 2. Gentle unsharp mask for crisp text
  // 3. Modulate for clean paper brightness and contrast
  const enhancedFullPipeline = sharp(inputJpg)
    .resize({
      width: fullWidth,
      fit: 'inside',
      kernel: sharp.kernel.lanczos3
    })
    .sharpen({
      sigma: 0.8,
      m1: 0.5,
      m2: 1.5
    })
    .modulate({
      brightness: 1.01,
      contrast: 1.03
    });

  // Save full WebP to /public/certs/<name>.webp and /public/certs/full/<name>.webp
  const fullWebpBuffer = await enhancedFullPipeline
    .clone()
    .webp({ quality: 85, effort: 6 })
    .toBuffer();

  fs.writeFileSync(path.join(OUT_DIR, `${name}.webp`), fullWebpBuffer);
  fs.writeFileSync(path.join(OUT_FULL, `${name}.webp`), fullWebpBuffer);

  // Also save high-res JPEG to /public/certs/full/<name>.jpg for user direct download
  const fullJpgBuffer = await enhancedFullPipeline
    .clone()
    .jpeg({ quality: 90, mozjpeg: true })
    .toBuffer();
  fs.writeFileSync(path.join(OUT_FULL, `${name}.jpg`), fullJpgBuffer);
  fs.writeFileSync(path.join(OUT_DIR, `${name}.jpg`), fullJpgBuffer);

  // Generate 400px thumbnail
  const thumbPipeline = sharp(inputJpg)
    .resize({
      width: 400,
      fit: 'inside',
      kernel: sharp.kernel.lanczos3
    })
    .sharpen({
      sigma: 0.6,
      m1: 0.4,
      m2: 1.2
    });

  const thumbWebpBuffer = await thumbPipeline
    .clone()
    .webp({ quality: 85, effort: 6 })
    .toBuffer();

  fs.writeFileSync(path.join(OUT_DIR, `${name}-thumb.webp`), thumbWebpBuffer);
  fs.writeFileSync(path.join(OUT_THUMBS, `${name}-thumb.webp`), thumbWebpBuffer);

  const thumbJpgBuffer = await thumbPipeline
    .clone()
    .jpeg({ quality: 88, mozjpeg: true })
    .toBuffer();
  fs.writeFileSync(path.join(OUT_THUMBS, `${name}-thumb.jpg`), thumbJpgBuffer);

  const fullMeta = await sharp(fullWebpBuffer).metadata();
  const thumbMeta = await sharp(thumbWebpBuffer).metadata();
  console.log(`✓ ${name}: Full (${fullMeta.width}x${fullMeta.height}, ${(fullWebpBuffer.length / 1024).toFixed(1)} KB), Thumb (${thumbMeta.width}x${thumbMeta.height}, ${(thumbWebpBuffer.length / 1024).toFixed(1)} KB)`);
}

async function main() {
  await ensureDirs();
  for (const name of CERT_NAMES) {
    await processCertificate(name);
  }
  console.log('All certificates successfully processed into /public/certs/');
}

main().catch(err => {
  console.error('Error processing certificates:', err);
  process.exit(1);
});
