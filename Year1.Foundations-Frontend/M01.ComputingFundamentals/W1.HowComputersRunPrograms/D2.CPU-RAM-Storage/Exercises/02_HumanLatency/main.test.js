// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { humanScale } = await import(target);

test('seconds', () => {
  assert.equal(humanScale(1), '1.0 seconds');
  assert.equal(humanScale(0.5), '0.5 seconds');
  assert.equal(humanScale(59), '59.0 seconds');
});

test('minutes and hours', () => {
  assert.equal(humanScale(100), '1.7 minutes');
  assert.equal(humanScale(7200), '2.0 hours');
});

test('days', () => {
  assert.equal(humanScale(100_000), '1.2 days');
  assert.equal(humanScale(10_000_000), '115.7 days');
});

test('years', () => {
  assert.equal(humanScale(150_000_000), '4.8 years');
});
