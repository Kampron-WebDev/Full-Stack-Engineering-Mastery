/**
 * averageUsage([40, 60, 80]) → 60
 * averageUsage([])           → 0
 *
 * ⚠️ 2 bugs. Find them.
 */
export function averageUsage(samples) {
  let total = 0;
  for (let i = 0; i <= samples.length; i++) {
    total += samples[i];
  }
  return total / samples.length;
}
