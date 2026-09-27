export function averageUsage(samples) {
  // Bug 2 fixed: 0 / 0 is NaN in JavaScript, so handle "no data" explicitly.
  if (samples.length === 0) return 0;

  let total = 0;
  // Bug 1 fixed: `<` not `<=`. The last valid index is length - 1.
  // samples[length] is `undefined`, and 180 + undefined = NaN.
  for (let i = 0; i < samples.length; i++) {
    total += samples[i];
  }
  return total / samples.length;
}
