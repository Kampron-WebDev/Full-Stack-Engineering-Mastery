// Talking to the filesystem.   Run me:  node files.js
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

// 1. List this folder
console.log('📂 Contents of', process.cwd());
for (const entry of fs.readdirSync('.', { withFileTypes: true })) {
  const kind = entry.isDirectory() ? 'DIR ' : 'FILE';
  const size = entry.isFile() ? fs.statSync(entry.name).size + ' bytes' : '';
  console.log(`  ${kind}  ${entry.name.padEnd(20)} ${size}`);
}

// 2. Build paths safely: works on Windows AND Linux
const file = path.join(os.tmpdir(), 'fsem-demo', 'hello.txt');
console.log('\n🧭 path.join made:', file);
console.log('   dirname :', path.dirname(file));
console.log('   basename:', path.basename(file));
console.log('   extname :', path.extname(file));
console.log('   absolute?', path.isAbsolute(file));

// 3. Create, write, read, delete (each is a system call underneath)
fs.mkdirSync(path.dirname(file), { recursive: true });
fs.writeFileSync(file, 'Hello from Node!\n');
console.log('\n📝 wrote', fs.statSync(file).size, 'bytes');
console.log('📖 read back:', JSON.stringify(fs.readFileSync(file, 'utf8')));
fs.rmSync(path.dirname(file), { recursive: true });
console.log('🗑️  deleted. Exists now?', fs.existsSync(file));
