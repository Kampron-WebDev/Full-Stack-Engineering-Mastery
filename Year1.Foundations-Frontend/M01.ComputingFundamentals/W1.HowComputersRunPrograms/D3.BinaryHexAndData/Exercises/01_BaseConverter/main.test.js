// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { toBinary, fromBinary, toHex } = await import(target);

test('toBinary', () => {
  assert.equal(toBinary(0), '0');
  assert.equal(toBinary(1), '1');
  assert.equal(toBinary(5), '101');
  assert.equal(toBinary(13), '1101');
  assert.equal(toBinary(255), '11111111');
  assert.equal(toBinary(1024), '10000000000');
});

test('toBinary rejects negatives and decimals', () => {
  assert.throws(() => toBinary(-1), RangeError);
  assert.throws(() => toBinary(2.5), RangeError);
});

test('fromBinary', () => {
  assert.equal(fromBinary('0'), 0);
  assert.equal(fromBinary('101'), 5);
  assert.equal(fromBinary('11111111'), 255);
  assert.equal(fromBinary('0001'), 1);
});

test('fromBinary rejects bad input', () => {
  assert.throws(() => fromBinary(''));
  assert.throws(() => fromBinary('102'));
  assert.throws(() => fromBinary('1 0'));
});

test('toHex', () => {
  assert.equal(toHex(0), '0');
  assert.equal(toHex(10), 'A');
  assert.equal(toHex(255), 'FF');
  assert.equal(toHex(4096), '1000');
  assert.equal(toHex(48879), 'BEEF');
  assert.throws(() => toHex(-5), RangeError);
});

test('round trip: fromBinary(toBinary(n)) === n', () => {
  for (let n = 0; n <= 300; n++) assert.equal(fromBinary(toBinary(n)), n);
});

test('no built-in shortcuts were used', () => {
  const file = new URL(target, import.meta.url);
  const code = readFileSync(file, 'utf8').replace(/\/\/.*$/gm, ''); // ignore comments
  assert.doesNotMatch(code, /toString\(\s*(2|16)\s*\)|parseInt|Number\(\s*['"`]0b/);
});
