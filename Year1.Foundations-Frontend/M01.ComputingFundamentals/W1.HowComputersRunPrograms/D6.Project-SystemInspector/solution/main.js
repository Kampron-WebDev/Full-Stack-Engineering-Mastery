// THE CORE: pure functions only.

const UNITS = ['KB', 'MB', 'GB', 'TB'];

export function formatBytes(bytes) {
  if (bytes < 0) throw new RangeError('bytes must be >= 0');
  if (bytes < 1024) return `${bytes} B`;
  let value = bytes / 1024;
  let unit = 0;
  while (value >= 1024 && unit < UNITS.length - 1) {
    value /= 1024;
    unit++;
  }
  return `${value.toFixed(1)} ${UNITS[unit]}`;
}

export function formatUptime(seconds) {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  const parts = [];
  if (days > 0) parts.push(`${days}d`);
  if (days > 0 || hours > 0) parts.push(`${hours}h`);
  parts.push(`${minutes}m`);
  return parts.join(' ');
}

export function memoryUsedPercent(total, free) {
  if (total === 0) return 0;
  return Math.round(((total - free) / total) * 100);
}

export function convertNumber(n) {
  // Accept '255' as well as 255, but reject '', '12abc', 'banana'.
  const value = typeof n === 'string' && /^\d+$/.test(n) ? Number(n) : n;
  if (typeof value !== 'number' || !Number.isInteger(value) || value < 0) {
    throw new RangeError(`"${n}" is not a non-negative whole number`);
  }
  return {
    decimal: String(value),
    binary: value.toString(2),
    hex: value.toString(16).toUpperCase(),
  };
}

export function textBytes(text) {
  const bytes = new TextEncoder().encode(text);
  return {
    characters: [...text].length,
    bytes: bytes.length,
    hex: [...bytes].map((b) => b.toString(16).padStart(2, '0')).join(' '),
  };
}

export function buildReport(s) {
  const used = memoryUsedPercent(s.totalMem, s.freeMem);
  return [
    '=== System Inspector ===',
    `Host     : ${s.hostname} (${s.platform} ${s.arch})`,
    `CPU      : ${s.cpuCount} cores · ${s.cpuModel}`,
    `Memory   : ${formatBytes(s.freeMem)} free of ${formatBytes(s.totalMem)} (${used}% used)`,
    `Uptime   : ${formatUptime(s.uptimeSeconds)}`,
    `Node     : ${s.nodeVersion} (V8 ${s.v8Version})`,
    `Process  : PID ${s.pid}`,
  ].join('\n');
}
