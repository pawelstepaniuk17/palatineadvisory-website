const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const baseDir = "/Users/pawelstepaniuk/Projects/Code/Mayerfeld/palatineadvisory-website";
const exportedDir = "/Users/pawelstepaniuk/Projects/Code/Mayerfeld/exported-logos";
const publicDir = path.join(baseDir, "public");
const brainDir = "/Users/pawelstepaniuk/.gemini/antigravity/brain/0821aad7-6ecb-4579-b666-7dcb6320c5fb";

async function makePalatineCircle() {
  console.log("Compositing Palatine Advisory logo into a white circular medallion...");

  const rawSvg = fs.readFileSync(path.join(publicDir, "logo.svg"), "utf8");

  // Create Circular SVG with pure white circular disc and subtle Roman keyline rim
  const circularSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024" fill="none">
  <!-- Clean Pure White Circular Disc with Roman Travertine Keyline -->
  <circle cx="512" cy="512" r="480" fill="#FFFFFF" stroke="#DFD6C2" stroke-width="14" />

  <!-- Centered Palatine 'P' Arch & Keystone -->
  <g transform="translate(512, 512) scale(0.78) translate(-512, -512)">
    ${rawSvg.replace(/<svg[^>]*>|<\/svg>/gi, "")}
  </g>
</svg>`;

  const circularSvgBuf = Buffer.from(circularSvg);

  // 1. Export 2K Master PNG (2048x2048)
  const master2k = await sharp(circularSvgBuf)
    .resize(2048, 2048)
    .png({ compressionLevel: 9 })
    .toBuffer();

  fs.mkdirSync(exportedDir, { recursive: true });
  fs.writeFileSync(path.join(exportedDir, "palatine-advisory-logo-2k.png"), master2k);
  fs.writeFileSync(path.join(brainDir, "palatine-advisory-logo-2k.png"), master2k);
  fs.writeFileSync(path.join(brainDir, "palatine-circle-preview.png"), master2k);
  fs.writeFileSync(path.join(publicDir, "palatine-advisory-logo-2k.png"), master2k);

  // 2. Favicon SVG (with white circle for browser tabs & bookmarks)
  fs.writeFileSync(path.join(publicDir, "favicon.svg"), circularSvg);
  fs.writeFileSync(path.join(publicDir, "icon.svg"), circularSvg);

  // 3. Multi-size PNG Favicons
  await sharp(master2k).resize(512, 512).png().toFile(path.join(publicDir, "favicon.png"));
  await sharp(master2k).resize(180, 180).png().toFile(path.join(publicDir, "apple-touch-icon.png"));
  await sharp(master2k).resize(180, 180).png().toFile(path.join(publicDir, "apple-icon.png"));
  await sharp(master2k).resize(96, 96).png().toFile(path.join(publicDir, "favicon-96x96.png"));
  await sharp(master2k).resize(48, 48).png().toFile(path.join(publicDir, "favicon-48x48.png"));
  await sharp(master2k).resize(32, 32).png().toFile(path.join(publicDir, "favicon-32x32.png"));
  await sharp(master2k).resize(16, 16).png().toFile(path.join(publicDir, "favicon-16x16.png"));

  const icoBuf = await sharp(master2k).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, "favicon.ico"), icoBuf);

  console.log("Palatine Advisory white circular logo & favicons exported successfully!");
}

makePalatineCircle().catch(console.error);
