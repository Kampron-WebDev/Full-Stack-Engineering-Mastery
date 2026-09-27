// Run with:  node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { evaluateRPN, calculate } = await import(target);

test('addition and multiplication', () => {
  assert.equal(evaluateRPN(['3', '4', '+']), 7);
  assert.equal(evaluateRPN(['3', '4', '+', '2', '*']), 14);
});

test('operand order matters for - and /', () => {
  assert.equal(evaluateRPN(['10', '3', '-']), 7);
  assert.equal(evaluateRPN(['12', '4', '/']), 3);
});

test('decimals and a single number', () => {
  assert.equal(evaluateRPN(['2.5', '2', '*']), 5);
  assert.equal(evaluateRPN(['5']), 5);
});

test('longer program', () => {
  // (5 + ((1 + 2) * 4)) - 3  =  14
  assert.equal(evaluateRPN(['5', '1', '2', '+', '4', '*', '+', '3', '-']), 14);
});

test('division by zero throws RangeError', () => {
  assert.throws(() => evaluateRPN(['1', '0', '/']), { name: 'RangeError', message: 'Division by zero' });
});

test('malformed expressions throw', () => {
  assert.throws(() => evaluateRPN(['+']));
  assert.throws(() => evaluateRPN(['1', '+']));
  assert.throws(() => evaluateRPN(['1', '2']));
  assert.throws(() => evaluateRPN([]));
});

const skip = typeof calculate !== 'function' && 'stretch goal not attempted yet';

test('⭐ stretch: calculate respects precedence', { skip }, () => {
  assert.equal(calculate('3 + 4 * 2'), 11);
  assert.equal(calculate('10 - 4 - 3'), 3); // left to right
  assert.equal(calculate('2 * 3 + 4 * 5'), 26);
});

test('⭐ stretch: calculate respects parentheses', { skip }, () => {
  assert.equal(calculate('(3 + 4) * 2'), 14);
  assert.equal(calculate('3.5 * (4 - 1)'), 10.5);
  assert.equal(calculate('((2))'), 2);
});
