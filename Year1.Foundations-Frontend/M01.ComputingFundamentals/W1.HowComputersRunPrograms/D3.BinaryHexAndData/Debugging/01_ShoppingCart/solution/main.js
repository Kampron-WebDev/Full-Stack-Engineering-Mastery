export function cartTotal(prices) {
  // Fix: do the maths in whole cents. Integers are exact; binary fractions like 0.1 are not.
  // Math.round cleans up inputs like 19.99 * 100 = 1998.9999999999998.
  let totalCents = 0;
  for (const price of prices) {
    totalCents += Math.round(price * 100);
  }
  return totalCents / 100;
}

// Even better in a real system: never have dollar floats at all.
// Store and send integer cents everywhere (as Stripe's API does), and convert
// to "$25.30" only when DISPLAYING the value.
