// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { tokenize } = await import(target);

test('simple expression', () => {
  assert.deepEqual(tokenize('12 + 3'), ['12', '+', '3']);
});

test('spaces are optional', () => {
  assert.deepEqual(tokenize('12+3'), ['12', '+', '3']);
  assert.deepEqual(tokenize('   7   '), ['7']);
});

test('decimals and parentheses', () => {
  assert.deepEqual(tokenize('3.5 * (4 - 1)'), ['3.5', '*', '(', '4', '-', '1', ')']);
  assert.deepEqual(tokenize('(0.25/5)'), ['(', '0.25', '/', '5', ')']);
});

test('multi-digit numbers stay together', () => {
  assert.deepEqual(tokenize('100*2048'), ['100', '*', '2048']);
});

test('empty input', () => {
  assert.deepEqual(tokenize(''), []);
});

test('unknown characters throw SyntaxError with position', () => {
  assert.throws(() => tokenize('2 $ 3'), { name: 'SyntaxError', message: 'Unexpected character "$" at position 2' });
  assert.throws(() => tokenize('x'), SyntaxError);
});
