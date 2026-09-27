import { tokenize } from '../../01_Tokenizer/solution/main.js';

const OPERATIONS = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => {
    if (b === 0) throw new RangeError('Division by zero');
    return a / b;
  },
};

export function evaluateRPN(tokens) {
  const stack = [];

  for (const token of tokens) {
    if (Object.hasOwn(OPERATIONS, token)) {
      if (stack.length < 2) throw new Error(`Not enough numbers for "${token}"`);
      const right = stack.pop(); // popped FIRST = right-hand side
      const left = stack.pop();
      stack.push(OPERATIONS[token](left, right));
    } else {
      const value = Number(token);
      if (Number.isNaN(value)) throw new Error(`Not a number: "${token}"`);
      stack.push(value);
    }
  }

  if (stack.length !== 1) throw new Error('Invalid expression');
  return stack[0];
}

// ⭐ Stretch: Dijkstra's shunting-yard algorithm (infix → RPN).
const PRECEDENCE = { '+': 1, '-': 1, '*': 2, '/': 2 };

export function toRPN(tokens) {
  const output = [];
  const operators = []; // a stack of waiting operators and '('

  for (const token of tokens) {
    if (token in PRECEDENCE) {
      // Pop operators that should run first (higher or equal precedence: left-to-right).
      while (operators.length && PRECEDENCE[operators.at(-1)] >= PRECEDENCE[token]) {
        output.push(operators.pop());
      }
      operators.push(token);
    } else if (token === '(') {
      operators.push(token);
    } else if (token === ')') {
      while (operators.length && operators.at(-1) !== '(') output.push(operators.pop());
      if (operators.pop() !== '(') throw new SyntaxError('Unmatched ")"');
    } else {
      output.push(token); // a number goes straight to the output
    }
  }

  while (operators.length) {
    const op = operators.pop();
    if (op === '(') throw new SyntaxError('Unmatched "("');
    output.push(op);
  }
  return output;
}

// lexer → translator → stack machine: a tiny interpreter!
export function calculate(expression) {
  return evaluateRPN(toRPN(tokenize(expression)));
}
