// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { describeRuntime } = await import(target);

test('detects a browser-like global', () => {
  assert.equal(describeRuntime({ window: { document: {} } }), 'browser');
});

test('detects a node-like global', () => {
  assert.equal(describeRuntime({ process: { versions: { node: '24.1.0' } } }), 'node 24.1.0');
});

test('unknown runtime does not crash', () => {
  assert.equal(describeRuntime({}), 'unknown');
  assert.equal(describeRuntime({ process: {} }), 'unknown');
});

test('works on the real Node global', () => {
  assert.equal(describeRuntime(), `node ${process.versions.node}`);
});
