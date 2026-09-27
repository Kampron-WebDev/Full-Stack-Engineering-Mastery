# Debugging 01: CLI Arguments

A command-line tool is started like this:

```powershell
node students.js ADD Ama 19
```

Node hands the program:

```js
process.argv = ['C:\\Program Files\\nodejs\\node.exe', 'C:\\…\\students.js', 'ADD', 'Ama', '19']
```

`parseCli(argv)` should return the **command** (lowercased) and the remaining **options**:

```js
parseCli(['node', 'students.js', 'ADD', 'Ama', '19'])  // → { command: 'add', options: ['Ama', '19'] }
parseCli(['node', 'students.js'])                      // → { command: 'help', options: [] }
```

It has **2 bugs**.

## Your task

1. `node --test`. What is `command` actually coming back as? (Look closely: it's not even a string!)
2. Fix both bugs. Explain each in MY-NOTES.md.

<details><summary>Hint for bug 1</summary>

Which index of `argv` is the first thing the *user* typed?

</details>

<details><summary>Hint for bug 2</summary>

`'ADD'.toLowerCase` vs `'ADD'.toLowerCase()`: what's the difference? Try both in `node` (type `node` in the terminal to get an interactive prompt).

</details>
