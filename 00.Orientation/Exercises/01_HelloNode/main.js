/**
 * Returns a welcome message, e.g.
 * greet('Ama') → 'Hello, Ama! Welcome to Full-Stack Engineering.'
 */
export function greet(name) {
  // TODO: return the welcome message (use a template literal with backticks)
  return `Hello, ${name}! Welcome to Full-Stack Engineering.`;
}

console.log(greet("Ama"));

/**
 * Returns { years, months, weeks } for a course that lasts `years` years.
 * 1 year = 12 months, 1 month = 4 study weeks.
 */
export function courseLength(years) {
  // TODO: calculate months and weeks, then return an object
  return { years: years, months: years * 12, weeks: years * 48 };
}

// console.log(courseLength(3));
