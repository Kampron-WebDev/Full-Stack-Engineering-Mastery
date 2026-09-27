// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { cartTotal } = await import(target);

test('simple total is exact', () => {
  assert.equal(cartTotal([0.1, 0.2]), 0.3);
});

test('realistic cart is exact', () => {
  assert.equal(cartTotal([19.99, 5.01, 0.1, 0.2]), 25.3);
  assert.equal(cartTotal([1.1, 2.2, 3.3]), 6.6);
});

test('returns a number, not a string', () => {
  assert.equal(typeof cartTotal([0.1, 0.2]), 'number');
});

test('empty cart', () => {
  assert.equal(cartTotal([]), 0);
});
