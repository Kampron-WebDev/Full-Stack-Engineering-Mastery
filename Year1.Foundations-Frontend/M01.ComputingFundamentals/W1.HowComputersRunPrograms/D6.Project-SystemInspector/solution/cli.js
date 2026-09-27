// THE SHELL: arguments, OS data, printing, exit codes.
// Usage:  node cli.js [report | convert <n> | bytes <text> | help]
import os from 'node:os';
import { buildReport, convertNumber, textBytes } from './main.js';

const USAGE = `Usage: node cli.js <command>

Commands:
  report          show CPU, memory, uptime and runtime info (default)
  convert <n>     show a number in decimal, binary and hex
  bytes <text>    show the UTF-8 bytes of some text
  help            show this message`;

function takeSnapshot() {
  const cpus = os.cpus();
  return {
    hostname: os.hostname(),
    platform: os.platform(),
    arch: os.arch(),
    cpuCount: cpus.length,
    cpuModel: cpus[0]?.model.trim() ?? 'unknown',
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    uptimeSeconds: os.uptime(),
    nodeVersion: process.version,
    v8Version: process.versions.v8,
    pid: process.pid,
  };
}

function fail(message) {
  console.error(`Error: ${message}`);
  process.exit(1);
}

const [command = 'report', arg] = process.argv.slice(2);

switch (command.toLowerCase()) {
  case 'report':
    console.log(buildReport(takeSnapshot()));
    break;

  case 'convert': {
    if (arg === undefined) fail('convert needs a number, e.g. node cli.js convert 255');
    try {
      const { decimal, binary, hex } = convertNumber(arg);
      console.log(`decimal : ${decimal}\nbinary  : ${binary}\nhex     : 0x${hex}`);
    } catch (err) {
      fail(err.message);
    }
    break;
  }

  case 'bytes': {
    if (arg === undefined) fail('bytes needs some text, e.g. node cli.js bytes "héllo"');
    const { characters, bytes, hex } = textBytes(arg);
    console.log(`characters : ${characters}\nbytes      : ${bytes}\nhex        : ${hex}`);
    break;
  }

  case 'help':
    console.log(USAGE);
    break;

  default:
    fail(`unknown command "${command}"\n\n${USAGE}`);
}
