/**
 * evaluateRPN(['3', '4', '+', '2', '*']) → 14
 * Throws RangeError('Division by zero'), and Error for malformed expressions.
 */
export function evaluateRPN(tokens) {
  const stack = [];

  for (const token of tokens) {
    // TODO 1: operator? pop right-hand side, then left-hand side, compute, push the result
    //         (check there are at least 2 numbers first, and watch out for division by zero)
    // TODO 2: otherwise it's a number: push Number(token)
  }

  // TODO 3: exactly one number must remain; return it, or throw
}

// ⭐ Stretch (optional): export toRPN(tokens) and calculate(expression). See README.md.
