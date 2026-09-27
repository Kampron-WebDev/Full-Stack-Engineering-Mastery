export function formatRelease(version, changes) {
  // Bug 2 fixed: arrays have .length. `.size` belongs to Map/Set.
  // Reading a missing property gives `undefined` (no error!), so the text said "undefined changes".
  const count = changes.length;
  const list = changes.join(', ');
  // Bug 1 fixed: ${...} only works inside BACKTICKS. In 'single quotes' it's plain text.
  return `v${version}: ${count} changes (${list})`;
}
