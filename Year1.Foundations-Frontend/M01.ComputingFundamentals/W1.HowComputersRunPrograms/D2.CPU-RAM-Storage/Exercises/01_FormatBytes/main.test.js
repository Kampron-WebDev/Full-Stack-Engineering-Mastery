// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { formatBytes } = await import(target);

test('small values stay in bytes', () => {
  assert.equal(formatBytes(0), '0 B');
  assert.equal(formatBytes(512), '512 B');
  assert.equal(formatBytes(1023), '1023 B');
});

test('kilobytes', () => {
  assert.equal(formatBytes(1024), '1.0 KB');
  assert.equal(formatBytes(1536), '1.5 KB');
});

test('megabytes and gigabytes', () => {
  assert.equal(formatBytes(1048576), '1.0 MB');
  assert.equal(formatBytes(5.5 * 1024 ** 3), '5.5 GB');
});

test('stops at TB, the biggest unit', () => {
  assert.equal(formatBytes(1024 ** 4), '1.0 TB');
  assert.equal(formatBytes(2 * 1024 ** 5), '2048.0 TB');
});

test('negative numbers throw RangeError', () => {
  assert.throws(() => formatBytes(-1), RangeError);
});
