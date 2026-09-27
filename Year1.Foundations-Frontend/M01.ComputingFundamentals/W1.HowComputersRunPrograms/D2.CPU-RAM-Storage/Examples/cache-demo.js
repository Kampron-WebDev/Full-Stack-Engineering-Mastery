// Same work, different ORDER, different speed.   Run me:  node cache-demo.js
//
// We add up every number in a big array twice:
//   1. in order:        0, 1, 2, 3, ...
//   2. jumping around:  0, STRIDE, 2*STRIDE, ... then 1, 1+STRIDE, ...
// Both visit every element exactly once, so the answer is identical.

const SIZE = 1 << 23;          // about 8 million numbers (32 MB), much bigger than the CPU caches
const STRIDE = 16;             // 16 numbers × 4 bytes = 64 bytes = one cache line. Try 1, 4, 64, 1024.
const data = new Int32Array(SIZE).fill(1);

function sumInOrder() {
  let total = 0;
  for (let i = 0; i < SIZE; i++) total += data[i];
  return total;
}

function sumJumping() {
  let total = 0;
  for (let start = 0; start < STRIDE; start++) {
    for (let i = start; i < SIZE; i += STRIDE) total += data[i];
  }
  return total;
}

function time(label, fn) {
  fn(); // warm-up run (lets the JavaScript engine optimise the function first)
  const t0 = performance.now();
  const result = fn();
  const ms = performance.now() - t0;
  console.log(`${label.padEnd(16)} total=${result}  ${ms.toFixed(1)} ms`);
  return ms;
}

const a = time('in order', sumInOrder);
const b = time(`stride ${STRIDE}`, sumJumping);
console.log(`\nJumping around was ${(b / a).toFixed(1)}× slower, for exactly the same additions.`);
console.log('Why? In order, each 64-byte cache line fetched from RAM is fully used.');
console.log('Jumping, most of each fetched line is thrown away before we come back for it.');
