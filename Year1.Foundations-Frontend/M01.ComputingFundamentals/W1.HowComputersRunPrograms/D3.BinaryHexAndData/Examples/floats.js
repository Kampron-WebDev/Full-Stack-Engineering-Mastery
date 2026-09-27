// Floating point: fast, but approximate.   Run me:  node floats.js

console.log('0.1 + 0.2        =', 0.1 + 0.2);
console.log('0.1 + 0.2 === 0.3?', 0.1 + 0.2 === 0.3);
console.log('0.1 really is    =', (0.1).toFixed(25));   // the closest binary approximation

// ✅ Money: work in whole cents (integers are exact)
const pricesInCents = [1999, 501, 10, 20];
const totalCents = pricesInCents.reduce((sum, p) => sum + p, 0);
console.log('\nTotal in cents   =', totalCents, '→ display as', (totalCents / 100).toFixed(2));

// Integers are only exact up to 2^53 - 1
console.log('\nMAX_SAFE_INTEGER =', Number.MAX_SAFE_INTEGER);
console.log('2**53 + 1        =', 2 ** 53 + 1, '  ← wrong! (should end in 3)');
console.log('BigInt version   =', 2n ** 53n + 1n, '← BigInt is exact, any size');

// Overflow in a fixed-size integer (like C++ int8_t)
const bytes = new Int8Array(1);
bytes[0] = 127;
bytes[0] += 1;
console.log('\nInt8: 127 + 1    =', bytes[0], '  ← overflow wrapped around');
