// What is YOUR computer made of?   Run me:  node my-machine.js
import os from 'node:os';

const GB = 1024 ** 3;
const cpus = os.cpus();

console.log('🧠 CPU');
console.log('   Model :', cpus[0]?.model ?? 'unknown');
console.log('   Cores :', cpus.length, '(each core is a separate "chef")');
console.log('   Arch  :', os.arch());

console.log('\n🪵 RAM');
console.log('   Total :', (os.totalmem() / GB).toFixed(1), 'GB');
console.log('   Free  :', (os.freemem() / GB).toFixed(1), 'GB');

console.log('\n📦 This Node process is using right now:');
const mem = process.memoryUsage();
console.log('   rss       :', (mem.rss / 1024 / 1024).toFixed(1), 'MB  (all RAM held by this process)');
console.log('   heapUsed  :', (mem.heapUsed / 1024 / 1024).toFixed(1), 'MB  (memory used by your JS objects)');

// Try it: create a big array, e.g. new Array(10_000_000).fill(1), then print memoryUsage again.
