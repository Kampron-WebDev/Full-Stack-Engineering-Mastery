# Exercise 02: Folder Summary

**Goal:** read a **real** directory with system calls through Node's `fs` module.

## Your task

Complete `summarizeFolder(dirPath)`. It looks **only at the top level** of the folder (not inside sub-folders) and returns:

| Field | Meaning |
|---|---|
| `files` | Number of files directly inside |
| `folders` | Number of sub-folders directly inside |
| `bytes` | Total size of those files, in bytes |

Given this folder:

```text
demo/
├── a.txt      (5 bytes)
├── b.js       (10 bytes)
└── sub/
    └── c.md   (3 bytes, NOT counted: it's inside a sub-folder)
```

```js
summarizeFolder('demo')  // → { files: 2, folders: 1, bytes: 15 }
```

If the folder doesn't exist, let the error from `fs` be thrown (don't catch it).

The tests create a temporary folder like the one above, call your function, and delete the folder afterwards.

When the tests pass, try it on real folders: `node try-it.js ..` or `node try-it.js C:\Windows`.

## Check your work

```powershell
node --test
```

<details><summary>Hint 1</summary>

`fs.readdirSync(dirPath, { withFileTypes: true })` returns entries with `.name`, `.isFile()` and `.isDirectory()`.

</details>

<details><summary>Hint 2</summary>

`fs.statSync(path.join(dirPath, entry.name)).size` gives a file's size in bytes.

</details>

**Stretch (optional):** add `summarizeFolderDeep(dirPath)` that also counts everything inside sub-folders. You'll need a function that calls itself, which is **recursion** (Week 3).
