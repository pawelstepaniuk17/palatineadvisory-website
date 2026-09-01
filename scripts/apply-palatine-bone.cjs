const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const baseDir = "/Users/pawelstepaniuk/Projects/Code/Mayerfeld/palatineadvisory-website";
const exportedDir = "/Users/pawelstepaniuk/Projects/Code/Mayerfeld/exported-logos";
const publicDir = path.join(baseDir, "public");
const assetsDir = path.join(baseDir, "src/assets");

async function updatePalatineBrand() {
  console.log("Updating Palatine Advisory brand with Roman Travertine Bone / Marble accent...");

  const svgPath = path.join(publicDir, "logo.svg");
  let svgContent = fs.readFileSync(svgPath, "utf8");

  // Replace Keystone color with Roman Travertine Bone (#D4C5A9)
  svgContent = svgContent.replace(/fill="#7AA7E0"/gi, 'fill="#D4C5A9"');
  svgContent = svgContent.replace(/fill="#769EDB"/gi, 'fill="#D4C5A9"');

  // Write updated SVG to public and src/assets
  fs.writeFileSync(svgPath, svgContent);
  fs.writeFileSync(path.join(assetsDir, "palatine-logo.svg"), svgContent);
  fs.writeFileSync(path.join(publicDir, "favicon.svg"), svgContent);

  const svgBuf = Buffer.from(svgContent);

  // 1. Export 2K Master PNG (2048x2048, transparent)
  const master2k = await sharp(svgBuf)
    .resize(2048, 2048)
    .png({ compressionLevel: 9 })
    .toBuffer();

  fs.mkdirSync(exportedDir, { recursive: true });
  fs.writeFileSync(path.join(exportedDir, "palatine-advisory-logo-2k.png"), master2k);
  fs.writeFileSync("/Users/pawelstepaniuk/.gemini/antigravity/brain/0821aad7-6ecb-4579-b666-7dcb6320c5fb/palatine-advisory-logo-2k.png", master2k);

  // Also replace old olive-tree-logo.png in src/assets
  fs.writeFileSync(path.join(assetsDir, "olive-tree-logo.png"), master2k);

  // 2. Favicon Suite
  await sharp(master2k).resize(512, 512).png().toFile(path.join(publicDir, "favicon.png"));
  await sharp(master2k).resize(180, 180).png().toFile(path.join(publicDir, "apple-touch-icon.png"));
  await sharp(master2k).resize(180, 180).png().toFile(path.join(publicDir, "apple-icon.png"));
  await sharp(master2k).resize(96, 96).png().toFile(path.join(publicDir, "favicon-96x96.png"));
  await sharp(master2k).resize(48, 48).png().toFile(path.join(publicDir, "favicon-48x48.png"));
  await sharp(master2k).resize(32, 32).png().toFile(path.join(publicDir, "favicon-32x32.png"));
  await sharp(master2k).resize(16, 16).png().toFile(path.join(publicDir, "favicon-16x16.png"));

  const icoBuf = await sharp(master2k).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, "favicon.ico"), icoBuf);

  console.log("All Palatine assets with Roman Bone / Marble keystone generated!");
}

updatePalatineBrand().catch(console.error);
