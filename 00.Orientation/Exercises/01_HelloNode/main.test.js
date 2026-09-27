// Run with:  node --test
// (Your code is in main.js. You don't need to edit this file.)
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { greet, courseLength } = await import(target);

test('greet welcomes a person by name', () => {
  assert.equal(greet('Ama'), 'Hello, Ama! Welcome to Full-Stack Engineering.');
  assert.equal(greet('Kofi'), 'Hello, Kofi! Welcome to Full-Stack Engineering.');
});

test('courseLength converts years to months and weeks', () => {
  assert.deepEqual(courseLength(3), { years: 3, months: 36, weeks: 144 });
  assert.deepEqual(courseLength(1), { years: 1, months: 12, weeks: 48 });
});
