const potrace = require("potrace");
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputImg = "/Users/pawelstepaniuk/.gemini/antigravity/brain/0821aad7-6ecb-4579-b666-7dcb6320c5fb/.user_uploaded/media_1788258330759.jpg";
const outputSvgPath = "/Users/pawelstepaniuk/Projects/Code/Mayerfeld/palatineadvisory-website/public/logo.svg";
const previewPngPath = "/Users/pawelstepaniuk/.gemini/antigravity/brain/0821aad7-6ecb-4579-b666-7dcb6320c5fb/palatine-logo-preview.png";

async function vectorizePalatineLogo() {
  console.log("Vectorizing Palatine Logo...");

  const { data, info } = await sharp(inputImg).raw().toBuffer({ resolveWithObject: true });
  const numPixels = info.width * info.height;

  // Mask 1: Deep Slate Body (R, G, B all < 90)
  const bodyMask = Buffer.alloc(numPixels);
  // Mask 2: Keystone (B > 160, R < 160)
  const keystoneMask = Buffer.alloc(numPixels);

  for (let i = 0; i < numPixels; i++) {
    const r = data[i * 3];
    const g = data[i * 3 + 1];
    const b = data[i * 3 + 2];

    const brightness = (r + g + b) / 3;

    // Keystone is prominent blue: high blue relative to red
    if (b > 160 && (b - r) > 40) {
      keystoneMask[i] = 0; // potrace traces black (0)
      bodyMask[i] = 255;
    } else if (brightness < 120) {
      bodyMask[i] = 0; // dark body
      keystoneMask[i] = 255;
    } else {
      bodyMask[i] = 255;
      keystoneMask[i] = 255;
    }
  }

  const bodyPng = await sharp(bodyMask, { raw: { width: info.width, height: info.height, channels: 1 } }).png().toBuffer();
  const keystonePng = await sharp(keystoneMask, { raw: { width: info.width, height: info.height, channels: 1 } }).png().toBuffer();

  const trace = (buffer, opts) => new Promise((resolve, reject) => {
    potrace.trace(buffer, opts, (err, svg) => {
      if (err) reject(err);
      else resolve(svg);
    });
  });

  const bodySvg = await trace(bodyPng, {
    turdSize: 10,
    optTolerance: 0.2,
    alphaMax: 1.0,
    color: "#1E2C3D",
  });

  const keystoneSvg = await trace(keystonePng, {
    turdSize: 5,
    optTolerance: 0.2,
    alphaMax: 1.0,
    color: "#7AA7E0",
  });

  // Extract path data from SVGs
  const getPath = (svgStr) => {
    const match = svgStr.match(/<path[^>]*d="([^"]+)"/i);
    return match ? match[1] : "";
  };

  const bodyPath = getPath(bodySvg);
  const keystonePath = getPath(keystoneSvg);

  // Combined Multi-Color Clean Vector SVG
  const finalSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${info.width} ${info.height}" width="1024" height="1024" fill="none">
  <!-- Palatine Advisory Colonnade 'P' Body (#1E2C3D Deep Slate Ink) -->
  <path d="${bodyPath}" fill="#1E2C3D" fill-rule="evenodd" />

  <!-- Palatine Keystone Linchpin (#7AA7E0 Signature Cornflower Blue) -->
  <path d="${keystonePath}" fill="#7AA7E0" fill-rule="evenodd" />
</svg>`;

  fs.writeFileSync(outputSvgPath, finalSvg);
  fs.writeFileSync("/Users/pawelstepaniuk/Projects/Code/Mayerfeld/palatineadvisory-website/public/favicon.svg", finalSvg);

  // Render high-res preview PNG (2048x2048) on warm ivory background (#FAF8F5)
  const previewSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${info.width} ${info.height}" width="2048" height="2048" fill="none">
  <rect width="${info.width}" height="${info.height}" fill="#FAF8F5" />
  <path d="${bodyPath}" fill="#1E2C3D" fill-rule="evenodd" />
  <path d="${keystonePath}" fill="#7AA7E0" fill-rule="evenodd" />
</svg>`;

  await sharp(Buffer.from(previewSvg)).png().toFile(previewPngPath);

  console.log("Vectorized SVG saved to:", outputSvgPath);
  console.log("Rendered preview PNG saved to:", previewPngPath);
}

vectorizePalatineLogo().catch(console.error);
