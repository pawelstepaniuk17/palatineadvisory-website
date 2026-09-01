const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const exportedDir = "/Users/pawelstepaniuk/Projects/Code/Mayerfeld/exported-logos";
const publicDir = "/Users/pawelstepaniuk/Projects/Code/Mayerfeld/palatineadvisory-website/public";
const svgPath = path.join(publicDir, "logo.svg");

async function exportPalatine2k() {
  const svgBuf = fs.readFileSync(svgPath);

  fs.mkdirSync(exportedDir, { recursive: true });

  // 1. Export 2K Master PNG (2048x2048, 100% Transparent)
  await sharp(svgBuf)
    .resize(2048, 2048)
    .png({ compressionLevel: 9 })
    .toFile(path.join(exportedDir, "palatine-advisory-logo-2k.png"));

  await sharp(svgBuf)
    .resize(2048, 2048)
    .png({ compressionLevel: 9 })
    .toFile("/Users/pawelstepaniuk/.gemini/antigravity/brain/0821aad7-6ecb-4579-b666-7dcb6320c5fb/palatine-advisory-logo-2k.png");

  // 2. Favicon Suite
  await sharp(svgBuf).resize(512, 512).png().toFile(path.join(publicDir, "favicon.png"));
  await sharp(svgBuf).resize(180, 180).png().toFile(path.join(publicDir, "apple-touch-icon.png"));
  await sharp(svgBuf).resize(180, 180).png().toFile(path.join(publicDir, "apple-icon.png"));
  await sharp(svgBuf).resize(96, 96).png().toFile(path.join(publicDir, "favicon-96x96.png"));
  await sharp(svgBuf).resize(48, 48).png().toFile(path.join(publicDir, "favicon-48x48.png"));
  await sharp(svgBuf).resize(32, 32).png().toFile(path.join(publicDir, "favicon-32x32.png"));
  await sharp(svgBuf).resize(16, 16).png().toFile(path.join(publicDir, "favicon-16x16.png"));

  const icoBuf = await sharp(svgBuf).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, "favicon.ico"), icoBuf);

  console.log("Palatine 2K Master PNG & Favicons exported successfully!");
}

exportPalatine2k().catch(console.error);
