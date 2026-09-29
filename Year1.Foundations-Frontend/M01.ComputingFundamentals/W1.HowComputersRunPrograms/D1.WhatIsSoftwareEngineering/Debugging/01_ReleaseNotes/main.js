/**
 * formatRelease('2.3.0', ['fix login', 'faster search', 'dark mode'])
 *   → 'v2.3.0: 3 changes (fix login, faster search, dark mode)'
 *
 * ⚠️ This function has 2 bugs. Find and fix them.
 */
export function formatRelease(version, changes) {
  const count = changes.length;
  const list = changes.join(", ");
  return `v${version}: ${count} changes (${list})`;
}

// console.log(
//   formatRelease("2.3.0", ["fix login", "faster search", "dark mode"]),
// );
