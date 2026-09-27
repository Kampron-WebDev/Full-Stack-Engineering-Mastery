// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { layerOf } = await import(target);

test('frontend components', () => {
  for (const c of ['button', 'form', 'page', 'navigation menu']) assert.equal(layerOf(c), 'frontend', c);
});

test('backend components', () => {
  for (const c of ['api endpoint', 'authentication', 'business rules', 'email sending'])
    assert.equal(layerOf(c), 'backend', c);
});

test('database components', () => {
  for (const c of ['table', 'index', 'backup', 'query']) assert.equal(layerOf(c), 'database', c);
});

test('infrastructure components', () => {
  for (const c of ['server', 'load balancer', 'cdn', 'ci pipeline']) assert.equal(layerOf(c), 'infrastructure', c);
});

test('ignores capitals and outer spaces', () => {
  assert.equal(layerOf('  Load Balancer '), 'infrastructure');
  assert.equal(layerOf('API Endpoint'), 'backend');
  assert.equal(layerOf('CDN'), 'infrastructure');
});

test('unknown components', () => {
  assert.equal(layerOf('coffee machine'), 'unknown');
  assert.equal(layerOf(''), 'unknown');
});
