// 🚫 Don't use toString(2 or 16), parseInt, or Number('0b...'). Do it by hand!

/** toBinary(13) → '1101'. Throws RangeError for negatives and non-integers. */
export function toBinary(n) {
  // - refuse negative numbers and numbers that aren't whole   → RangeError
  if (n < 0 || !Number.isInteger(n)) {
    throw new RangeError("Input must be a non-negative integer.");
  }
  //- special case: 0 returns '0'
  if (n === 0) {
    return "0";
  }

  let binaryString = "";
  let currentNumber = n;
  while (currentNumber > 0) {
    const remainder = currentNumber % 2;
    binaryString = remainder + binaryString; // prepend the remainder
    currentNumber = Math.floor(currentNumber / 2);
  }

  return binaryString;
}

/** fromBinary('1101') → 13. Throws Error for empty text or characters other than 0/1. */

export function fromBinary(text) {
  if (text.length === 0 || /[^01]/.test(text)) {
    throw new Error(
      "Input must be a non-empty string containing only '0' and '1'.",
    );
  }

  let total = 0;
  let columnValue = 1;

  for (let i = text.length - 1; i >= 0; i--) {
    const char = text[i];
    if (char === "1") {
      total += columnValue;
    }
    columnValue *= 2; // double the column value for the next bit
  }
  return total;
}

/** toHex(255) → 'FF' (uppercase). Throws RangeError for negatives and non-integers. */

export function toHex(n) {
  if (n < 0 || !Number.isInteger(n)) {
    throw new RangeError("Input must be a non-negative integer.");
  }
  if (n === 0) {
    return "0";
  }

  const hexDigits = "0123456789ABCDEF";
  let hexString = "";
  let currentNumber = n;
  while (currentNumber > 0) {
    const remainder = currentNumber % 16;
    hexString = hexDigits[remainder] + hexString;
    currentNumber = Math.floor(currentNumber / 16);
  }
  return hexString;
}

export function toBase(n, base) {
  if (n < 0 || !Number.isInteger(n)) {
    throw new RangeError("Input must be a non-negative integer.");
  }
  if (base < 2 || base > 36) {
    throw new RangeError("Base must be between 2 and 36.");
  }
  if (n === 0) {
    return "0";
  }

  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  let currentNumber = n;
  while (currentNumber > 0) {
    const remainder = currentNumber % base;
    result = digits[remainder] + result;
    currentNumber = Math.floor(currentNumber / base);
  }
  return result;
}
console.log(toBase(45, 16));
