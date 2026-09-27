# Exercise 01: Extension Counter

**Goal:** use Node's `path` module and count things with an object. (This is how tools like "disk usage by file type" work.)

## Your task

Complete `countByExtension(fileNames)`. It receives an array of file names and returns an object counting each extension.

Rules:

- Extensions are **lowercased**: `'test.JS'` counts as `'.js'`.
- Files with no extension go under `'(none)'`. That includes names like `'Makefile'` and dotfiles like `'.gitignore'`.
- Only the **last** extension counts: `'archive.tar.gz'` → `'.gz'`.

```js
countByExtension(['app.js', 'README.md', 'test.JS', 'Makefile', '.gitignore'])
// → { '.js': 2, '.md': 1, '(none)': 2 }

countByExtension([])
// → {}
```

## Check your work

```powershell
node --test
```

<details><summary>Hint 1</summary>

`path.extname('test.JS')` → `'.JS'`. `path.extname('Makefile')` → `''`. `path.extname('.gitignore')` → `''`.

</details>

<details><summary>Hint 2: counting pattern</summary>

```js
counts[key] = (counts[key] ?? 0) + 1;
```

</details>
