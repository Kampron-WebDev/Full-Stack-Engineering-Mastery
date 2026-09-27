import path from 'node:path';

export function countByExtension(fileNames) {
  const counts = {};
  for (const name of fileNames) {
    const key = path.extname(name).toLowerCase() || '(none)'; // '' is falsy, so it falls back
    counts[key] = (counts[key] ?? 0) + 1;
  }
  return counts;
}
