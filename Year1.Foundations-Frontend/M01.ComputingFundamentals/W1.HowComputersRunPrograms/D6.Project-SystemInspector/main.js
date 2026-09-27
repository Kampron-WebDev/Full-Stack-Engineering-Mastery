// ─────────────────────────────────────────────────────────────
//  THE CORE: pure functions only.
//  No console.log, no process, no os. Data in → data out.
// ─────────────────────────────────────────────────────────────

/** Day 2 rules: formatBytes(1536) → '1.5 KB'. */
export function formatBytes(bytes) {
  // TODO: reuse your Day 2 solution
}

/** formatUptime(90061) → '1d 1h 1m'. See README for the rules. */
export function formatUptime(seconds) {
  // TODO
}

/** memoryUsedPercent(16, 6) → 63. Returns 0 when total is 0. */
export function memoryUsedPercent(total, free) {
  // TODO
}

/**
 * convertNumber(255) or convertNumber('255') → { decimal: '255', binary: '11111111', hex: 'FF' }
 * RangeError for anything that is not a non-negative whole number.
 */
export function convertNumber(n) {
  // TODO
}

/** Day 3's byteReport: textBytes('é') → { characters: 1, bytes: 2, hex: 'c3 a9' }. */
export function textBytes(text) {
  // TODO
}

/**
 * Builds the 7-line text report from a snapshot object shaped like:
 * {
 *   hostname: 'AMA-LAPTOP', platform: 'win32', arch: 'x64',
 *   cpuCount: 8, cpuModel: 'Intel(R) Core(TM) i7',
 *   totalMem: 17179869184, freeMem: 6657199308,   // bytes
 *   uptimeSeconds: 101520,
 *   nodeVersion: 'v24.1.0', v8Version: '13.6.233.10',
 *   pid: 14032,
 * }
 * Lines (joined with '\n'):
 *   === System Inspector ===
 *   Host     : AMA-LAPTOP (win32 x64)
 *   CPU      : 8 cores · Intel(R) Core(TM) i7
 *   Memory   : 6.2 GB free of 16.0 GB (61% used)
 *   Uptime   : 1d 4h 12m
 *   Node     : v24.1.0 (V8 13.6.233.10)
 *   Process  : PID 14032
 */
export function buildReport(snapshot) {
  // TODO: use formatBytes, memoryUsedPercent and formatUptime
}
