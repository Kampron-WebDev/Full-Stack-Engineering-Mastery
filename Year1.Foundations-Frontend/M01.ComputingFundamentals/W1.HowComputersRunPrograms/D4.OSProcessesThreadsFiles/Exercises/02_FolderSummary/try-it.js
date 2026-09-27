// Run me AFTER your tests pass:  node try-it.js <folder>
import { summarizeFolder } from './main.js';

const dir = process.argv[2] ?? '.';
try {
  console.log(dir, '→', summarizeFolder(dir));
} catch (err) {
  console.error('Could not read', dir, '→', err.code ?? err.message);
  process.exit(1);
}
