// What is the Node.js runtime made of?   Run me:  node versions.js
const v = process.versions;

console.log('Node.js :', v.node, '  ← the runtime itself');
console.log('V8      :', v.v8, '  ← the JavaScript ENGINE (same family as in Chrome)');
console.log('libuv   :', v.uv, '  ← event loop + async I/O + thread pool');
console.log('OpenSSL :', v.openssl, '  ← encryption (HTTPS, crypto)');
console.log('ICU     :', v.icu, '  ← Unicode & language support (Day 3!)');
console.log('\nAll components:', Object.keys(v).join(', '));
