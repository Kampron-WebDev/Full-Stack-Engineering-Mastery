// Text is numbers. How many bytes does each character need?   Run me:  node text-bytes.js

const encoder = new TextEncoder(); // turns a string into UTF-8 bytes

for (const text of ['A', 'a', 'é', '€', '你', '\u{1F600}']) {
  const bytes = encoder.encode(text);
  const hex = [...bytes].map((x) => x.toString(16).padStart(2, '0')).join(' ');
  const codePoint = 'U+' + text.codePointAt(0).toString(16).toUpperCase().padStart(4, '0');
  console.log(`${text}  ${codePoint.padEnd(8)} ${bytes.length} byte(s): ${hex}`);
}

// ⚠️ JavaScript's .length counts UTF-16 "code units", not characters:
const emoji = '\u{1F600}';
console.log('\n"😀".length      =', emoji.length, '  ← surprise!');
console.log('[..."😀"].length =', [...emoji].length, '  ← real characters');
