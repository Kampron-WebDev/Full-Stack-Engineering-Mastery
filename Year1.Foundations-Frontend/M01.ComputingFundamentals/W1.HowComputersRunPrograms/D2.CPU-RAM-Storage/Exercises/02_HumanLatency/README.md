# Exercise 02: Human-Scale Latency

**Goal:** make computer timings *feel* real by pretending **1 nanosecond lasts 1 second**.

## Your task

Complete `humanScale(ns)` in `main.js`.

- Treat the number of nanoseconds as that many **seconds**.
- Pick the **largest** unit where the value is at least 1:

| Unit | Seconds in one |
|---|---|
| `years` | 31,536,000 (365 days) |
| `days` | 86,400 |
| `hours` | 3,600 |
| `minutes` | 60 |
| `seconds` | 1 |

- Format with one decimal: `'<value> <unit>'`.
- Anything under 60 is in `seconds` (even `0.5 seconds`).

```js
humanScale(1)            // L1 cache       → '1.0 seconds'
humanScale(100)          // RAM            → '1.7 minutes'
humanScale(100_000)      // SSD read       → '1.2 days'
humanScale(10_000_000)   // disk seek      → '115.7 days'
humanScale(150_000_000)  // Europe ↔ USA   → '4.8 years'
```

When the tests pass, run `node report.js` in this folder to print the whole latency table using **your** function.

## Check your work

```powershell
node --test
```

<details><summary>Hint</summary>

Put the units in an array from **biggest to smallest**, loop over it, and return as soon as `seconds / unitSize >= 1`.
Fall back to seconds at the end.

</details>
