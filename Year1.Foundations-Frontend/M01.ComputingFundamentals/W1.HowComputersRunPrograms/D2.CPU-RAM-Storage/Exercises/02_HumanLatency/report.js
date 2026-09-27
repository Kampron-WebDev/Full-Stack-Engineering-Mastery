// Run me AFTER your tests pass:  node report.js
import { humanScale } from './main.js';

const LATENCIES = [
  ['L1 cache read', 1],
  ['L2 cache read', 4],
  ['RAM read', 100],
  ['SSD random read', 100_000],
  ['Same-datacentre round trip', 500_000],
  ['Hard disk seek', 10_000_000],
  ['Europe ↔ USA round trip', 150_000_000],
];

console.log('If 1 nanosecond lasted 1 second…\n');
for (const [what, ns] of LATENCIES) {
  console.log(`${what.padEnd(28)} ${humanScale(ns)}`);
}
