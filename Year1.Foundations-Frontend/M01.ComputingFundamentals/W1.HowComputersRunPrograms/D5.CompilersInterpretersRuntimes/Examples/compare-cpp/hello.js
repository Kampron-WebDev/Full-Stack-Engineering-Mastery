// JIT: translate and run in one go.   Run me:  node hello.js
// Compare the timing with the C++ version:
//   PowerShell:  Measure-Command { ./hello.exe }   vs   Measure-Command { node hello.js }

let total = 0;
for (let i = 0; i < 100_000_000; i++) total += i % 7;
console.log('JavaScript says hello. total =', total);
