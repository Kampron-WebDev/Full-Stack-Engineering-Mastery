// A whole "app" in one file, split into the same three layers real apps have.
// Run me:  node tiny-app.js

// ───────── DATA LAYER: remembers things (a real app uses a database) ─────────
const students = [
  { name: 'Ama', score: 82 },
  { name: 'Kofi', score: 45 },
  { name: 'Esi', score: 67 },
];

// ───────── LOGIC LAYER: the rules (a real app runs these on a backend server) ─────────
const PASS_MARK = 50;

function withResults(list) {
  return list.map((s) => ({ ...s, passed: s.score >= PASS_MARK }));
}

// ───────── PRESENTATION LAYER: shows things (a real app uses a web page) ─────────
console.log('📋 Class results');
console.table(withResults(students));

// Try it: add a student, change PASS_MARK, run again.
// Notice: changing a RULE didn't require touching how data is stored or shown.
// That separation is one of the first ideas of software engineering.
