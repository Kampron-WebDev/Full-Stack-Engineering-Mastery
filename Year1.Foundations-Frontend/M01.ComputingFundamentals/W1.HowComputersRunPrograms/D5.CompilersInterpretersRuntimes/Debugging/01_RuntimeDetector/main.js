/**
 * describeRuntime({ window: { document: {} } })              → 'browser'
 * describeRuntime({ process: { versions: { node: '24.1.0' } } }) → 'node 24.1.0'
 * describeRuntime({})                                        → 'unknown'
 *
 * ⚠️ 2 bugs (both the same kind).
 */
export function describeRuntime(g = globalThis) {
  if (g.window.document) return 'browser';
  if (g.process.versions.node) return `node ${g.process.versions.node}`;
  return 'unknown';
}
