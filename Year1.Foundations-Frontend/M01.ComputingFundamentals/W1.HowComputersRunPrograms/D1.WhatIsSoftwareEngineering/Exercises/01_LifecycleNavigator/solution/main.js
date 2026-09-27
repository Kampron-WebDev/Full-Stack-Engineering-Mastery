export const PHASES = ['requirements', 'design', 'implementation', 'testing', 'deployment', 'maintenance'];

function indexOrThrow(phase) {
  const index = PHASES.indexOf(phase);
  if (index === -1) throw new Error(`Unknown phase: ${phase}`);
  return index;
}

export function nextPhase(phase) {
  const index = indexOrThrow(phase);
  return PHASES[(index + 1) % PHASES.length];
}

export function previousPhase(phase) {
  const index = indexOrThrow(phase);
  // + PHASES.length keeps the number positive: in JS, -1 % 6 is -1, not 5.
  return PHASES[(index - 1 + PHASES.length) % PHASES.length];
}
