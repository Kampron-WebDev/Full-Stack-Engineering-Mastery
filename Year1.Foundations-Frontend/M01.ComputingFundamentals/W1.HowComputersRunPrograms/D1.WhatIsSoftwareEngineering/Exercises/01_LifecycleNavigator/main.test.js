// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { nextPhase, previousPhase } = await import(target);

test('nextPhase moves forward', () => {
  assert.equal(nextPhase('requirements'), 'design');
  assert.equal(nextPhase('design'), 'implementation');
  assert.equal(nextPhase('deployment'), 'maintenance');
});

test('nextPhase wraps from maintenance to requirements', () => {
  assert.equal(nextPhase('maintenance'), 'requirements');
});

test('previousPhase moves backward and wraps', () => {
  assert.equal(previousPhase('testing'), 'implementation');
  assert.equal(previousPhase('requirements'), 'maintenance');
});

test('unknown phases throw a helpful error', () => {
  assert.throws(() => nextPhase('coding'), /Unknown phase/);
  assert.throws(() => previousPhase('party'), /Unknown phase/);
});
