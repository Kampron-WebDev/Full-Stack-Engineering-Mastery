// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { inspectNumber } = await import(target);

test('255: one full byte', () => {
  assert.deepEqual(inspectNumber(255), {
    decimal: 255,
    binary: '11111111',
    hex: '0xFF',
    bitsNeeded: 8,
    bytesNeeded: 1,
    isPowerOfTwo: false,
  });
});

test('256: needs a second byte', () => {
  assert.deepEqual(inspectNumber(256), {
    decimal: 256,
    binary: '100000000',
    hex: '0x100',
    bitsNeeded: 9,
    bytesNeeded: 2,
    isPowerOfTwo: true,
  });
});

test('edge cases 0 and 1', () => {
  assert.deepEqual(inspectNumber(0), {
    decimal: 0,
    binary: '0',
    hex: '0x0',
    bitsNeeded: 1,
    bytesNeeded: 1,
    isPowerOfTwo: false,
  });
  assert.equal(inspectNumber(1).isPowerOfTwo, true);
  assert.equal(inspectNumber(1).bitsNeeded, 1);
});

test('powers of two', () => {
  for (const p of [2, 4, 8, 1024, 65536]) assert.equal(inspectNumber(p).isPowerOfTwo, true, String(p));
  for (const q of [3, 6, 7, 1000, 65535]) assert.equal(inspectNumber(q).isPowerOfTwo, false, String(q));
});

test('bigger numbers', () => {
  const r = inspectNumber(65536);
  assert.equal(r.bitsNeeded, 17);
  assert.equal(r.bytesNeeded, 3);
  assert.equal(r.hex, '0x10000');
});

test('rejects invalid input', () => {
  for (const bad of [-1, 1.5, NaN, '12']) assert.throws(() => inspectNumber(bad), RangeError);
});
