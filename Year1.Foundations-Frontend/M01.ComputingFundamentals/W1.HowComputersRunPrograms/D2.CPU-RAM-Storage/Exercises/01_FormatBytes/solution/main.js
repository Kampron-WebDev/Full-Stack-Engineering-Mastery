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
