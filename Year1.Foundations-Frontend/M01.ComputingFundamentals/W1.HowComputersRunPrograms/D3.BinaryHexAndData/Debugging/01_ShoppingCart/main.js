/**
 * Adds up prices (in dollars) and returns the total in dollars.
 * cartTotal([0.1, 0.2]) → 0.3
 *
 * ⚠️ 1 bug (a design bug, not a typo).
 */
export function cartTotal(prices) {
  let total = 0;
  for (const price of prices) {
    total += price;
  }
  return total;
}
