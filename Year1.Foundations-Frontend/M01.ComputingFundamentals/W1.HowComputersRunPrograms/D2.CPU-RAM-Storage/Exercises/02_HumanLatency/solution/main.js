const UNITS = [
  ['years', 365 * 24 * 60 * 60],
  ['days', 24 * 60 * 60],
  ['hours', 60 * 60],
  ['minutes', 60],
];

export function humanScale(ns) {
  const seconds = ns; // the whole trick: 1 ns → 1 s
  for (const [name, size] of UNITS) {
    if (seconds / size >= 1) return `${(seconds / size).toFixed(1)} ${name}`;
  }
  return `${seconds.toFixed(1)} seconds`;
}
