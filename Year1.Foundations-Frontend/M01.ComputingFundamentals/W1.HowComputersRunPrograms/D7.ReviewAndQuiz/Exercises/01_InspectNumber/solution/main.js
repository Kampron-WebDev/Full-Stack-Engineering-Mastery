export function inspectNumber(n) {
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) {
    throw new RangeError('n must be a non-negative whole number');
  }

  const binary = n.toString(2);
  const bitsNeeded = binary.length; // '0' has length 1, so 0 needs 1 bit
  return {
    decimal: n,
    binary,
    hex: '0x' + n.toString(16).toUpperCase(),
    bitsNeeded,
    bytesNeeded: Math.ceil(bitsNeeded / 8),
    // A power of two has exactly ONE bit set (1000). Subtracting 1 flips it
    // and sets all bits below (0111), so AND-ing them gives 0.
    // (Bitwise operators work on 32-bit integers, fine for this exercise's range.)
    isPowerOfTwo: n > 0 && (n & (n - 1)) === 0,
  };
}
