# Exercise 02: UTF-8 Byte Report

**Goal:** see the difference between **characters** and **bytes**. It causes real bugs in databases, APIs and SMS systems.

## Your task

Complete `byteReport(text)`. It returns an object:

| Field | Meaning |
|---|---|
| `characters` | Number of real characters (Unicode code points) |
| `bytes` | Number of bytes in UTF-8 |
| `hex` | The bytes as lowercase, 2-digit hex, separated by single spaces |

```js
byteReport('Hi')  // → { characters: 2, bytes: 2, hex: '48 69' }
byteReport('é')   // → { characters: 1, bytes: 2, hex: 'c3 a9' }
byteReport('😀')  // → { characters: 1, bytes: 4, hex: 'f0 9f 98 80' }
byteReport('')    // → { characters: 0, bytes: 0, hex: '' }
```

⚠️ `'😀'.length` is **2** in JavaScript (it counts UTF-16 units, not characters). Use `[...text].length` for real characters.

You **may** use `toString(16)` here. Yesterday's rule was only for the base converter.

## Check your work

```powershell
node --test
```

<details><summary>Hint 1</summary>

`new TextEncoder().encode(text)` returns a `Uint8Array` of the UTF-8 bytes. It has a `.length`.

</details>

<details><summary>Hint 2</summary>

`[...bytes].map(b => b.toString(16).padStart(2, '0')).join(' ')`

</details>

**Think about it (MY-NOTES.md):** A database column is declared as "max 10 bytes". A user types a 5-character name made of emoji. What happens?
