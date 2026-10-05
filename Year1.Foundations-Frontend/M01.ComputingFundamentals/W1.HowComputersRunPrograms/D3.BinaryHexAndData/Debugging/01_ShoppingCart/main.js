/**
 * Adds up prices (in dollars) and returns the total in dollars.
 * cartTotal([0.1, 0.2]) → 0.3
 */

export function cartTotal(prices) {
  let total = 0;

  for (const price of prices) {
    const cents = Math.round(price * 100);
    total += cents;
  }
  return total / 100;
}
