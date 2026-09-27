// Who am I, as a process?   Run me:  node process-info.js hello world
import os from 'node:os';

console.log('My PID (process ID)  :', process.pid);
console.log('My parent PID        :', process.ppid, '(the terminal that started me)');
console.log('Platform / OS        :', process.platform, os.release());
console.log('Working directory    :', process.cwd());
console.log('Node version         :', process.version);
console.log('Uptime of the machine:', (os.uptime() / 3600).toFixed(1), 'hours');

console.log('\nprocess.argv (the command-line arguments):');
process.argv.forEach((arg, i) => console.log(`  [${i}] ${arg}`));
console.log('  → your own arguments start at index 2:', process.argv.slice(2));

console.log('\nA few environment variables:');
for (const name of ['USERNAME', 'USER', 'HOME', 'USERPROFILE', 'PATH']) {
  if (process.env[name]) console.log(`  ${name} = ${process.env[name].slice(0, 70)}`);
}

// Try:  $env:GREETING="hi"; node process-info.js     (PowerShell)
if (process.env.GREETING) console.log('\nGREETING from the environment:', process.env.GREETING);
