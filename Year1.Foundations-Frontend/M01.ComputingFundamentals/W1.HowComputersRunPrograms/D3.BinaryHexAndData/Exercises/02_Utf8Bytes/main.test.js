// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { byteReport } = await import(target);

test('plain ASCII: 1 byte per character', () => {
  assert.deepEqual(byteReport('Hi'), { characters: 2, bytes: 2, hex: '48 69' });
  assert.deepEqual(byteReport('A'), { characters: 1, bytes: 1, hex: '41' });
});

test('accented letter: 2 bytes', () => {
  assert.deepEqual(byteReport('é'), { characters: 1, bytes: 2, hex: 'c3 a9' });
});

test('euro sign: 3 bytes', () => {
  assert.deepEqual(byteReport('€'), { characters: 1, bytes: 3, hex: 'e2 82 ac' });
});

test('emoji: 1 character, 4 bytes', () => {
  assert.deepEqual(byteReport('\u{1F600}'), { characters: 1, bytes: 4, hex: 'f0 9f 98 80' });
  assert.deepEqual(byteReport('A\u{1F600}'), { characters: 2, bytes: 5, hex: '41 f0 9f 98 80' });
});

test('empty string', () => {
  assert.deepEqual(byteReport(''), { characters: 0, bytes: 0, hex: '' });
});
