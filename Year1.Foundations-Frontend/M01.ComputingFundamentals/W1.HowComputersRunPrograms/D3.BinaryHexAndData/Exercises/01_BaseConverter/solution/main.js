const DIGITS = '0123456789ABCDEF';

// One helper does the real work for every base: repeated division.
function toBase(n, base) {
  if (!Number.isInteger(n) || n < 0) throw new RangeError('n must be a non-negative integer');
  if (n === 0) return '0';

  let result = '';
  while (n > 0) {
    result = DIGITS[n % base] + result; // remainder becomes the next digit (from the right)
    n = Math.floor(n / base);
  }
  return result;
}

export function toBinary(n) {
  return toBase(n, 2);
}

export function toHex(n) {
  return toBase(n, 16);
}

export function fromBinary(text) {
  if (text.length === 0) throw new Error('empty binary string');
  let value = 0;
  for (const ch of text) {
    if (ch !== '0' && ch !== '1') throw new Error(`not a binary digit: "${ch}"`);
    value = value * 2 + (ch === '1' ? 1 : 0); // shift everything left one place, add the new bit
  }
  return value;
}
