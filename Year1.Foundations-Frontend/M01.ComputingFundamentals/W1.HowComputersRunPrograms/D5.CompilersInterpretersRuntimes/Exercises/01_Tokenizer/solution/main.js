const isDigit = (ch) => ch >= '0' && ch <= '9';

export function tokenize(expression) {
  const tokens = [];
  let i = 0;

  while (i < expression.length) {
    const ch = expression[i];

    if (ch === ' ') {
      i++;
    } else if (isDigit(ch)) {
      const start = i;
      while (i < expression.length && (isDigit(expression[i]) || expression[i] === '.')) i++;
      tokens.push(expression.slice(start, i));
    } else if ('+-*/()'.includes(ch)) {
      tokens.push(ch);
      i++;
    } else {
      throw new SyntaxError(`Unexpected character "${ch}" at position ${i}`);
    }
  }

  return tokens;
}
