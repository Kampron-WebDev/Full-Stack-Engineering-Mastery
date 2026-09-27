const LAYERS = {
  'button': 'frontend',
  'form': 'frontend',
  'page': 'frontend',
  'navigation menu': 'frontend',
  'api endpoint': 'backend',
  'authentication': 'backend',
  'business rules': 'backend',
  'email sending': 'backend',
  'table': 'database',
  'index': 'database',
  'backup': 'database',
  'query': 'database',
  'server': 'infrastructure',
  'load balancer': 'infrastructure',
  'cdn': 'infrastructure',
  'ci pipeline': 'infrastructure',
};

export function layerOf(component) {
  const key = component.trim().toLowerCase();
  // Object.hasOwn avoids surprises with built-in names like 'toString'
  return Object.hasOwn(LAYERS, key) ? LAYERS[key] : 'unknown';
}

// Why a lookup object beats 16 if-statements:
//  - Adding a component is one line of DATA, not new LOGIC.
//  - Lookup is fast (a hash map, Week 4) instead of checking conditions one by one.
//  - The table could later come from a file or a database without changing the function.
