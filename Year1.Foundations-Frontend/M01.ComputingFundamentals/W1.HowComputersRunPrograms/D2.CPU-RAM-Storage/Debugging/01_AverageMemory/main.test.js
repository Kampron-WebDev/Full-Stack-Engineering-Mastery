// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { averageUsage } = await import(target);

test('averages several samples', () => {
  assert.equal(averageUsage([40, 60, 80]), 60);
  assert.equal(averageUsage([10, 20]), 15);
});

test('a single sample is its own average', () => {
  assert.equal(averageUsage([73]), 73);
});

test('no samples gives 0, not NaN', () => {
  assert.equal(averageUsage([]), 0);
});
