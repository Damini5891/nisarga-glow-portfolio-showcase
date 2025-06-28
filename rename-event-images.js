import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Support __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Gather all image files in public/events
const eventsDir = path.join(__dirname, 'public', 'events');
const exts = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.bmp'];

function getEventImages() {
  return fs.readdirSync(eventsDir)
    .filter(f => exts.includes(path.extname(f).toLowerCase()))
    .sort();
}

// 2. Rename images to 1.ext, 2.ext, ...
function renameImages(images) {
  const renameMap = {};
  images.forEach((filename, idx) => {
    const ext = path.extname(filename);
    const newName = `${idx + 1}${ext}`;
    if (filename !== newName) {
      fs.renameSync(path.join(eventsDir, filename), path.join(eventsDir, newName));
      renameMap[filename] = newName;
    }
  });
  return renameMap;
}

// 3. Update code references
function updateReferences(renameMap, rootDir) {
  const extsToCheck = ['.js', '.jsx', '.ts', '.tsx', '.json', '.md', '.html', '.css', '.scss'];
  let filesChanged = [];
  function traverse(dir) {
    for (const file of fs.readdirSync(dir)) {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        if (file === 'node_modules' || file === '.git') continue;
        traverse(fullPath);
      } else if (extsToCheck.includes(path.extname(file))) {
        let content = fs.readFileSync(fullPath, 'utf8');
        let changed = false;
        for (const [oldName, newName] of Object.entries(renameMap)) {
          const oldRef = `public/events/${oldName}`;
          const newRef = `public/events/${newName}`;
          if (content.includes(oldRef)) {
            content = content.split(oldRef).join(newRef);
            changed = true;
          }
          // Also check for '/events/' in case of root-relative paths
          const oldRelRef = `/events/${oldName}`;
          const newRelRef = `/events/${newName}`;
          if (content.includes(oldRelRef)) {
            content = content.split(oldRelRef).join(newRelRef);
            changed = true;
          }
        }
        if (changed) {
          fs.writeFileSync(fullPath, content, 'utf8');
          filesChanged.push(fullPath);
        }
      }
    }
  }
  traverse(rootDir);
  return filesChanged;
}

function main() {
  console.log(`Scanning ${eventsDir}...`);
  const images = getEventImages();
  if (images.length === 0) {
    console.log('No event images found.');
    return;
  }
  console.log(`Found images:\n${images.join('\n')}\n`);
  const renameMap = renameImages(images);
  if (Object.keys(renameMap).length === 0) {
    console.log('No images needed renaming.');
    return;
  }
  console.log('Renamed files:');
  for (const [from, to] of Object.entries(renameMap)) {
    console.log(`  ${from} -> ${to}`);
  }
  const changedFiles = updateReferences(renameMap, __dirname);
  if (changedFiles.length === 0) {
    console.log('No references updated.');
  } else {
    console.log('\nUpdated references in:');
    changedFiles.forEach(f => console.log('  ' + path.relative(__dirname, f)));
  }
  console.log('\nDone! Please review the changes and test your site.');
}

main();