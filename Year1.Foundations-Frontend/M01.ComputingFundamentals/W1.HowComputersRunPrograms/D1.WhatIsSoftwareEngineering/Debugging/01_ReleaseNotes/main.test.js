// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { formatRelease } = await import(target);

test('formats a release with several changes', () => {
  assert.equal(
    formatRelease('2.3.0', ['fix login', 'faster search', 'dark mode']),
    'v2.3.0: 3 changes (fix login, faster search, dark mode)',
  );
});

test('formats a release with two changes', () => {
  assert.equal(formatRelease('1.0.1', ['security patch', 'typo fix']), 'v1.0.1: 2 changes (security patch, typo fix)');
});
