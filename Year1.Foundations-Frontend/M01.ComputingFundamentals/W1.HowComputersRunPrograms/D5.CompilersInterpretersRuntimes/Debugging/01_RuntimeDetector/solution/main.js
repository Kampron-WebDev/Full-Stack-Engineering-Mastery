export function describeRuntime(g = globalThis) {
  // Both bugs fixed with optional chaining (?.):
  // `a?.b` gives undefined instead of crashing when `a` is undefined or null.
  // "Cannot read properties of undefined (reading 'x')" means: you asked for .x
  // on something that doesn't exist. The fix is to check it first, or to use ?.
  if (g.window?.document) return 'browser';
  if (g.process?.versions?.node) return `node ${g.process.versions.node}`;
  return 'unknown';
}
