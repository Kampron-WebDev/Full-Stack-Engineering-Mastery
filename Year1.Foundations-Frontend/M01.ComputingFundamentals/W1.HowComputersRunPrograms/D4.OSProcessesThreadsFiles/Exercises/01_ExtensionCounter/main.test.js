// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { countByExtension } = await import(target);

test('counts mixed files', () => {
  assert.deepEqual(countByExtension(['app.js', 'README.md', 'test.JS', 'Makefile', '.gitignore']), {
    '.js': 2,
    '.md': 1,
    '(none)': 2,
  });
});

test('uses only the last extension', () => {
  assert.deepEqual(countByExtension(['archive.tar.gz', 'photo.jpeg', 'logo.JPEG']), {
    '.gz': 1,
    '.jpeg': 2,
  });
});

test('empty list gives empty object', () => {
  assert.deepEqual(countByExtension([]), {});
});
