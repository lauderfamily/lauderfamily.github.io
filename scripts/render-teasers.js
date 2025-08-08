#!/usr/bin/env node
/*
  Render all SVG teasers in assets/images/teasers to 1200x630 PNGs next to them.
*/
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const sharp = require('sharp');

const teaserDir = path.resolve(__dirname, '..', 'assets', 'images', 'teasers');

async function main() {
  const svgs = glob.sync(path.join(teaserDir, '*.svg'));
  if (!svgs.length) {
    console.error('No SVG teasers found.');
    process.exit(1);
  }
  for (const svgPath of svgs) {
    const base = path.basename(svgPath, '.svg');
    const outPath = path.join(teaserDir, base + '.png');
    try {
      const buf = fs.readFileSync(svgPath);
      await sharp(buf, { density: 300 })
        .resize(1200, 630, { fit: 'contain', background: { r: 11, g: 13, b: 15, alpha: 1 } })
        .png({ compressionLevel: 9, adaptiveFiltering: true })
        .toFile(outPath);
      console.log('Rendered', path.basename(outPath));
    } catch (e) {
      console.error('Failed to render', svgPath, e.message);
    }
  }
}

main();
