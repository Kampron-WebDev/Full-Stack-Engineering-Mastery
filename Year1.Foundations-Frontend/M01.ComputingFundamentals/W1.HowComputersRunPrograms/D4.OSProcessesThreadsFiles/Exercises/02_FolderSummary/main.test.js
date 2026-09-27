// Run with:  node --test
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { summarizeFolder } = await import(target);

let demo;

before(() => {
  // Build:  demo/a.txt (5 B), demo/b.js (10 B), demo/sub/c.md (3 B)
  demo = fs.mkdtempSync(path.join(os.tmpdir(), 'fsem-demo-'));
  fs.writeFileSync(path.join(demo, 'a.txt'), 'hello');
  fs.writeFileSync(path.join(demo, 'b.js'), '0123456789');
  fs.mkdirSync(path.join(demo, 'sub'));
  fs.writeFileSync(path.join(demo, 'sub', 'c.md'), 'abc');
});

after(() => fs.rmSync(demo, { recursive: true, force: true }));

test('summarises the top level only', () => {
  assert.deepEqual(summarizeFolder(demo), { files: 2, folders: 1, bytes: 15 });
});

test('a folder with one file and no sub-folders', () => {
  assert.deepEqual(summarizeFolder(path.join(demo, 'sub')), { files: 1, folders: 0, bytes: 3 });
});

test('an empty folder', () => {
  const empty = path.join(demo, 'empty');
  fs.mkdirSync(empty);
  assert.deepEqual(summarizeFolder(empty), { files: 0, folders: 0, bytes: 0 });
  fs.rmdirSync(empty);
});

test('a missing folder throws', () => {
  assert.throws(() => summarizeFolder(path.join(demo, 'does-not-exist')), { code: 'ENOENT' });
});
