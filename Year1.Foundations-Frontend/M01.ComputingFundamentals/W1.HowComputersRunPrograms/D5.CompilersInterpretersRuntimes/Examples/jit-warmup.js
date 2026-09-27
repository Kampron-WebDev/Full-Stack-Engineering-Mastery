// Watch the JIT compiler warm up.   Run me:  node jit-warmup.js
// The SAME function, called in rounds. Early rounds run as bytecode;
// once V8 sees it is "hot", TurboFan compiles it to optimised machine code.

function sumOfSquares(n) {
  let total = 0;
  for (let i = 0; i < n; i++) total += i * i;
  return total;
}

for (let round = 1; round <= 8; round++) {
  const t0 = performance.now();
  sumOfSquares(1_000_000);
  const ms = performance.now() - t0;
  console.log(`round ${round}: ${ms.toFixed(2)} ms ${'█'.repeat(Math.min(60, Math.round(ms * 4)))}`);
}

console.log('\nUsually the first round or two are slowest: that is the warm-up.');
console.log('Try: node --no-opt jit-warmup.js   (disables the optimising compiler; everything stays slow)');
