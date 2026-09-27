// Run with:  node --test
// These check the pure CORE (main.js). Add your own tests in my.test.js.
import { test } from 'node:test';
import assert from 'node:assert/strict';

const target = process.env.CHECK_SOLUTION ? './solution/main.js' : './main.js';
const { formatBytes, formatUptime, memoryUsedPercent, convertNumber, textBytes, buildReport } = await import(target);

test('formatBytes (Day 2 rules)', () => {
  assert.equal(formatBytes(512), '512 B');
  assert.equal(formatBytes(1536), '1.5 KB');
  assert.equal(formatBytes(16 * 1024 ** 3), '16.0 GB');
});

test('formatUptime', () => {
  assert.equal(formatUptime(59), '0m');
  assert.equal(formatUptime(125), '2m');
  assert.equal(formatUptime(3600), '1h 0m');
  assert.equal(formatUptime(86400), '1d 0h 0m');
  assert.equal(formatUptime(90061), '1d 1h 1m');
  assert.equal(formatUptime(101520), '1d 4h 12m');
});

test('memoryUsedPercent', () => {
  assert.equal(memoryUsedPercent(16, 6), 63);
  assert.equal(memoryUsedPercent(100, 100), 0);
  assert.equal(memoryUsedPercent(100, 0), 100);
  assert.equal(memoryUsedPercent(0, 0), 0);
});

test('convertNumber accepts numbers and numeric strings', () => {
  assert.deepEqual(convertNumber(255), { decimal: '255', binary: '11111111', hex: 'FF' });
  assert.deepEqual(convertNumber('10'), { decimal: '10', binary: '1010', hex: 'A' });
  assert.deepEqual(convertNumber(0), { decimal: '0', binary: '0', hex: '0' });
});

test('convertNumber rejects bad input', () => {
  for (const bad of [-3, 2.5, 'banana', '', '12abc']) {
    assert.throws(() => convertNumber(bad), RangeError, `should reject ${JSON.stringify(bad)}`);
  }
});

test('textBytes (Day 3 rules)', () => {
  assert.deepEqual(textBytes('hé'), { characters: 2, bytes: 3, hex: '68 c3 a9' });
});

test('buildReport renders a fake machine exactly', () => {
  const snapshot = {
    hostname: 'AMA-LAPTOP',
    platform: 'win32',
    arch: 'x64',
    cpuCount: 8,
    cpuModel: 'Intel(R) Core(TM) i7',
    totalMem: 16 * 1024 ** 3,
    freeMem: 6.2 * 1024 ** 3,
    uptimeSeconds: 101520,
    nodeVersion: 'v24.1.0',
    v8Version: '13.6.233.10',
    pid: 14032,
  };
  assert.equal(
    buildReport(snapshot),
    [
      '=== System Inspector ===',
      'Host     : AMA-LAPTOP (win32 x64)',
      'CPU      : 8 cores · Intel(R) Core(TM) i7',
      'Memory   : 6.2 GB free of 16.0 GB (61% used)',
      'Uptime   : 1d 4h 12m',
      'Node     : v24.1.0 (V8 13.6.233.10)',
      'Process  : PID 14032',
    ].join('\n'),
  );
});

test('the core is pure (no console, process or os in main.js)', async () => {
  const { readFileSync } = await import('node:fs');
  const code = readFileSync(new URL(target, import.meta.url), 'utf8').replace(/\/\/.*$|\/\*[\s\S]*?\*\//gm, '');
  assert.doesNotMatch(code, /console\.|process\.|node:os/);
});
