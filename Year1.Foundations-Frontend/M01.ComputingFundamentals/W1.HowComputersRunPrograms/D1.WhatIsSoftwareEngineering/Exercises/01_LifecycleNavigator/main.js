export const PHASES = ['requirements', 'design', 'implementation', 'testing', 'deployment', 'maintenance'];

/** Returns the phase after `phase`. After 'maintenance' comes 'requirements'. */
export function nextPhase(phase) {
  // TODO 1: find the index of `phase` in PHASES
  // TODO 2: if it isn't there, throw new Error(`Unknown phase: ${phase}`)
  // TODO 3: return the next phase, wrapping around at the end
}

/** Returns the phase before `phase`. Before 'requirements' comes 'maintenance'. */
export function previousPhase(phase) {
  // TODO: same idea, but going backwards
}
