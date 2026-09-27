import fs from 'node:fs';
import path from 'node:path';

export function summarizeFolder(dirPath) {
  let files = 0;
  let folders = 0;
  let bytes = 0;

  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      folders++;
    } else if (entry.isFile()) {
      files++;
      bytes += fs.statSync(path.join(dirPath, entry.name)).size;
    }
    // Anything else (symlinks, devices…) is ignored on purpose.
  }
  return { files, folders, bytes };
}

// Stretch: recursion. The function calls itself for every sub-folder.
export function summarizeFolderDeep(dirPath) {
  const total = { files: 0, folders: 0, bytes: 0 };
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const full = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      const inner = summarizeFolderDeep(full);
      total.folders += 1 + inner.folders;
      total.files += inner.files;
      total.bytes += inner.bytes;
    } else if (entry.isFile()) {
      total.files++;
      total.bytes += fs.statSync(full).size;
    }
  }
  return total;
}
