export const PHASES = [
  "requirements",
  "design",
  "implementation",
  "testing",
  "deployment",
  "maintenance",
];

/** Returns the phase after `phase`. After 'maintenance' comes 'requirements'. */
export function nextPhase(phase) {
  // TODO 1: find the index of `phase` in PHASES
  const index = PHASES.indexOf(phase);
  // TODO 2: if it isn't there, throw new Error(`Unknown phase: ${phase}`)
  if (index === -1) throw new Error(`Unknown phase: ${phase}`);
  // TODO 3: return the next phase, wrapping around at the end
  return PHASES[(index + 1) % PHASES.length];
}

/** Returns the phase before `phase`. Before 'requirements' comes 'maintenance'. */
export function previousPhase(phase) {
  // TODO: same idea, but going backwards
  const index = PHASES.indexOf(phase);
  if (index === -1) throw new Error(`Unknown phase: ${phase}`);
  return PHASES[(index - 1 + PHASES.length) % PHASES.length];
}

console.log(nextPhase("design"));
console.log(previousPhase("deployment"));
