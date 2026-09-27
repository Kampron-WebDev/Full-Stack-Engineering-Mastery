// Numbers in different bases.   Run me:  node bases.js

const n = 237;
console.log('decimal :', n);
console.log('binary  :', n.toString(2));          // '11101101'
console.log('hex     :', n.toString(16));         // 'ed'
console.log('padded  :', n.toString(2).padStart(8, '0'), '(a full byte)');

// Writing numbers directly in other bases
console.log('\n0b1101 =', 0b1101);   // binary literal  → 13
console.log('0xFF   =', 0xff);       // hex literal     → 255
console.log('0o755  =', 0o755);      // octal literal   → 493 (Linux permissions!)

// Parsing text in other bases
console.log('\nparseInt("1101", 2) =', parseInt('1101', 2));
console.log('parseInt("BEEF", 16) =', parseInt('BEEF', 16));

// A CSS colour is 3 bytes in hex
const colour = '#FF8800';
const [r, g, b] = [1, 3, 5].map((i) => parseInt(colour.slice(i, i + 2), 16));
console.log(`\n${colour} → red ${r}, green ${g}, blue ${b}`);

// Bitwise operators work on the binary digits directly
const READ = 0b100, WRITE = 0b010, EXECUTE = 0b001;
const permissions = READ | EXECUTE;                  // switch on two bits → 0b101
console.log('\npermissions =', permissions.toString(2));
console.log('can write?  ', (permissions & WRITE) !== 0);
console.log('can read?   ', (permissions & READ) !== 0);
