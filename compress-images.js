import sharp from "sharp";
import fg from "fast-glob";
import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";

// Handle __dirname in ES modules:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ---- Config ----
const ROOT_DIR = path.join(__dirname, "public", "events"); // Adjust if needed
const QUALITY = 80; // JPEG/WEBP quality

async function compressImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const tempPath = filePath + ".tmp";

  try {
    if (ext === ".jpg" || ext === ".jpeg") {
      await sharp(filePath)
        .jpeg({ quality: QUALITY })
        .toFile(tempPath);
    } else if (ext === ".png") {
      await sharp(filePath)
        .png({ quality: QUALITY, compressionLevel: 9 })
        .toFile(tempPath);
    } else {
      return;
    }
    await fs.rename(tempPath, filePath); // Overwrite original
    console.log(`Compressed: ${filePath}`);
  } catch (err) {
    console.error(`Failed to compress ${filePath}: ${err.message}`);
  }
}

const patterns = [`${ROOT_DIR}/**/*.{jpg,JPG,jpeg,JPEG,png,PNG}`];

const files = await fg(patterns, { dot: false });

if (files.length === 0) {
  console.log("No images found.");
} else {
  for (const file of files) {
    await compressImage(file);
  }
  console.log("All images compressed!");
}
