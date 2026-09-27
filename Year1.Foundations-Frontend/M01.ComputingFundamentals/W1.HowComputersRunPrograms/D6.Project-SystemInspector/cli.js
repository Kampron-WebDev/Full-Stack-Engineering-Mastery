// ─────────────────────────────────────────────────────────────
//  THE SHELL: talks to the outside world (arguments, OS, printing, exit codes)
//  and hands plain data to the pure core in main.js.
//
//  Usage:  node cli.js [report | convert <n> | bytes <text> | help]
// ─────────────────────────────────────────────────────────────
import os from 'node:os';
import { buildReport, convertNumber, textBytes } from './main.js';

/** Collects real data from the OS and runtime into a plain object. */
function takeSnapshot() {
  // TODO: return an object with the shape documented above buildReport() in main.js
  //       (os.hostname(), os.platform(), os.arch(), os.cpus(), os.totalmem(), os.freemem(),
  //        os.uptime(), process.version, process.versions.v8, process.pid)
}

// TODO 1: read the command and its argument from process.argv (remember Day 4's bug!)
// TODO 2: handle 'report' (default), 'convert', 'bytes', 'help'
// TODO 3: on bad input or unknown commands: console.error(...) and process.exit(1)
