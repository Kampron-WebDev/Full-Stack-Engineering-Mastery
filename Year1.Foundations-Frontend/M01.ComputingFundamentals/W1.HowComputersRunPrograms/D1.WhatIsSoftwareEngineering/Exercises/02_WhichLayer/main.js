// TODO 1: build a lookup object: component name → layer name.
const LAYERS = {
  button: "frontend",
  form: "frontend",
  page: "frontend",
  "navigation menu": "frontend",
  "api endpoint": "backend",
  authentication: "backend",
  "business rules": "backend",
  "email sending": "backend",
  table: "database",
  index: "database",
  backup: "database",
  query: "database",
  server: "infrastructure",
  "load balancer": "infrastructure",
  cdn: "infrastructure",
  "ci pipeline": "infrastructure",
};

/**
 * Returns 'frontend' | 'backend' | 'database' | 'infrastructure' | 'unknown'.
 * Ignores capital letters and surrounding spaces.
 */
export function layerOf(component) {
  // TODO 2: clean the input
  const key = component.trim().toLowerCase();
  // TODO 3: look it up, falling back to 'unknown'
  return Object.hasOwn(LAYERS, key) ? LAYERS[key] : "unknown";
}

console.log(layerOf("dialog"));
