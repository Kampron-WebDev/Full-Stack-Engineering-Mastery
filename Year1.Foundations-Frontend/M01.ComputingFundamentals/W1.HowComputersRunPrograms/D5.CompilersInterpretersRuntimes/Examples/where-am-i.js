// Same language, different runtimes, different APIs.   Run me:  node where-am-i.js
// Then paste this file's code into your browser's DevTools console (F12) and compare!

console.log('typeof window   :', typeof window);    // 'object' in a browser, 'undefined' in Node
console.log('typeof document :', typeof document);
console.log('typeof process  :', typeof process);   // 'object' in Node, 'undefined' in a browser
console.log('typeof fetch    :', typeof fetch);     // both have fetch nowadays
console.log('typeof setTimeout:', typeof setTimeout); // both have timers
console.log('globalThis is the same idea everywhere:', typeof globalThis);

// Using `typeof` is safe even for names that don't exist:
if (typeof window !== 'undefined') console.log('\n→ Running in a BROWSER');
else if (typeof process !== 'undefined') console.log('\n→ Running in NODE.JS', process.version);
