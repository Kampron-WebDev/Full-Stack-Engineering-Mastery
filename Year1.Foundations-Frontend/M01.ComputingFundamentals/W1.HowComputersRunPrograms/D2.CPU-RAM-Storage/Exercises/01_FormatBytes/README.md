# Exercise 01: Format Bytes

**Goal:** turn raw byte counts into human-friendly text, the way File Explorer and every dashboard does.

## Your task

Complete `formatBytes(bytes)` in `main.js`.

Rules:

1. Under 1024 bytes: show whole bytes with unit `B`, e.g. `'512 B'`.
2. Otherwise keep dividing by 1024 and move up the units **KB → MB → GB → TB** until the value is under 1024 (or you reach TB, the biggest unit).
3. Show **one decimal place** for KB and above: `'1.5 KB'`, `'1.0 MB'`.
4. Negative numbers make no sense: `throw new RangeError('bytes must be >= 0')`.

```js
formatBytes(0)                 // → '0 B'
formatBytes(1023)              // → '1023 B'
formatBytes(1024)              // → '1.0 KB'
formatBytes(1536)              // → '1.5 KB'
formatBytes(1048576)           // → '1.0 MB'
formatBytes(5.5 * 1024 ** 3)   // → '5.5 GB'
formatBytes(2 * 1024 ** 5)     // → '2048.0 TB'   (TB is the biggest unit, so we stop there)
formatBytes(-1)                // 💥 RangeError
```

## Check your work

```powershell
node --test
```

<details><summary>Hint 1</summary>

Put the units in an array: `['KB', 'MB', 'GB', 'TB']`. Keep an index of which unit you are on.

</details>

<details><summary>Hint 2</summary>

```js
let value = bytes / 1024;
let unit = 0;
while (value >= 1024 && unit < UNITS.length - 1) { … }
```

`value.toFixed(1)` gives a string with one decimal.

</details>
