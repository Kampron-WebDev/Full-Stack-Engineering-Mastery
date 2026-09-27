export function greet(name) {
  return `Hello, ${name}! Welcome to Full-Stack Engineering.`;
}

export function courseLength(years) {
  const months = years * 12;
  const weeks = months * 4;
  return { years, months, weeks }; // shorthand for { years: years, months: months, weeks: weeks }
}
