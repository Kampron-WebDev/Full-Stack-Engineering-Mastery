export function parseCli(argv) {
  // Bug 1 fixed: argv[0] is the node executable and argv[1] is the script,
  // so the user's own arguments start at index 2.
  const args = argv.slice(2);
  // Bug 2 fixed: `.toLowerCase` without () is the function ITSELF, not its result.
  const command = args.length > 0 ? args[0].toLowerCase() : 'help';
  return { command, options: args.slice(1) };
}
