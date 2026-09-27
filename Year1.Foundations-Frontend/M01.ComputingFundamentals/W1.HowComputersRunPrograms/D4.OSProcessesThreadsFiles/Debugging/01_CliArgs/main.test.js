// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { parseCli } = await import(target);

test('command and options', () => {
  assert.deepEqual(parseCli(['node', 'students.js', 'ADD', 'Ama', '19']), {
    command: 'add',
    options: ['Ama', '19'],
  });
});

test('command only', () => {
  assert.deepEqual(parseCli(['node', 'students.js', 'List']), { command: 'list', options: [] });
});

test('no command defaults to help', () => {
  assert.deepEqual(parseCli(['node', 'students.js']), { command: 'help', options: [] });
});
