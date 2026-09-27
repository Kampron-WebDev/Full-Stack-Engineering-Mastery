# Debugging 01: Release Notes Formatter

Every software release has a short summary line, like:

```text
v2.3.0: 3 changes (fix login, faster search, dark mode)
```

`formatRelease(version, changes)` in `main.js` should produce exactly that, but it has **2 bugs**.

## Your task

1. Run `node --test` and **read the failure messages carefully**: compare `expected` with `actual`.
2. Fix both bugs in `main.js` (small changes only; don't rewrite the function).
3. In MY-NOTES.md, write for each bug: *what* was wrong and *why* JavaScript behaved that way.

<details><summary>Hint for bug 1</summary>

Look at the quote characters around the text. Which kind of quotes make `${…}` work?

</details>

<details><summary>Hint for bug 2</summary>

Arrays in JavaScript don't have a `.size`. What do they have instead? And what does JS give you when you read a property that doesn't exist?

</details>
