// See the real bytecode V8 generates for a tiny function.
// Run me:  node --print-bytecode --print-bytecode-filter=add bytecode.js
//
// Look for lines like:
//   Ldar a1        ← Load into the Accumulator register: argument 1 (b)
//   Add a0, [0]    ← Add argument 0 (a) to the accumulator
//   Return         ← return the accumulator
// That's a tiny "machine" with a register, just like the CPU on Day 2.

function add(a, b) {
  return a + b;
}

console.log(add(2, 3));
