/**
 * tokenize('3.5 * (4 - 1)') → ['3.5', '*', '(', '4', '-', '1', ')']
 * Throws SyntaxError('Unexpected character "$" at position 2') for unknown characters.
 */
export function tokenize(expression) {
  const tokens = [];
  let i = 0;

  // TODO: loop while i < expression.length, looking at const ch = expression[i]:
  //   1. a space            → skip it
  //   2. a digit            → read the WHOLE number (digits and '.'), push it
  //   3. + - * / ( )        → push the one-character token
  //   4. anything else      → throw a SyntaxError
  //
  // ⚠️ Every branch must move i forward, or the loop never ends!
  //    (If `node --test` seems frozen, that's what happened: press Ctrl+C.)

  return tokens;
}
