/**
 * parseCli(['node', 'students.js', 'ADD', 'Ama', '19']) → { command: 'add', options: ['Ama', '19'] }
 * parseCli(['node', 'students.js'])                     → { command: 'help', options: [] }
 *
 * ⚠️ 2 bugs.
 */
export function parseCli(argv) {
  const args = argv.slice(1);
  const command = args.length > 0 ? args[0].toLowerCase : 'help';
  return { command, options: args.slice(1) };
}
