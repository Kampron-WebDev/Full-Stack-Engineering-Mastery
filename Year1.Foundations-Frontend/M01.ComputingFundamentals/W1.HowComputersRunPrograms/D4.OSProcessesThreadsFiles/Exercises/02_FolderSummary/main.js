import fs from 'node:fs';
import path from 'node:path';

/**
 * summarizeFolder('demo') → { files: 2, folders: 1, bytes: 15 }
 * Top level only. Let errors (e.g. missing folder) be thrown.
 */
export function summarizeFolder(dirPath) {
  // TODO 1: read the entries of dirPath (with file types)
  // TODO 2: count files and folders; add up the file sizes
  // TODO 3: return { files, folders, bytes }
}
