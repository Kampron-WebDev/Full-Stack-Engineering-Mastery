# Day 6 · Project: System Inspector CLI

[🏠 Course home](../../../../README.md) · [📅 Month 01](../../README.md) · [🗓️ Week 1](../README.md) · [⬅ Day 5](../D5.CompilersInterpretersRuntimes/README.md) · [Day 7 ➡](../D7.ReviewAndQuiz/README.md)

**Month 01 · Week 1 · Day 6** · ⏱️ about 3–5 hours · Uses: Days 2–5

---

## 🎯 The brief

> Your IT support team wants a small command-line tool that shows, at a glance, what a machine is made of and how it's doing. They also want quick number and text conversions when reading logs.

You'll build **`inspector`**, a Node.js CLI with **no libraries**, using everything from this week:

| Command | Uses |
|---|---|
| `node cli.js` or `node cli.js report` | Day 2 (CPU, RAM) + Day 4 (process, OS) + Day 5 (runtime versions) |
| `node cli.js convert 255` | Day 3 (binary, hex) |
| `node cli.js bytes "héllo 😀"` | Day 3 (UTF-8) |
| `node cli.js help` | Day 4 (arguments, exit codes) |

### Example session

```text
> node cli.js
=== System Inspector ===
Host     : AMA-LAPTOP (win32 x64)
CPU      : 8 cores · Intel(R) Core(TM) i7-1165G7 @ 2.80GHz
Memory   : 6.2 GB free of 15.8 GB (61% used)
Uptime   : 1d 4h 12m
Node     : v24.1.0 (V8 13.6.233.10-node.18)
Process  : PID 14032

> node cli.js convert 255
decimal : 255
binary  : 11111111
hex     : 0xFF

> node cli.js bytes "hé"
characters : 2
bytes      : 3
hex        : 68 c3 a9

> node cli.js convert banana
Error: "banana" is not a non-negative whole number
> echo $LASTEXITCODE
1
```

---

## 🏗️ Architecture: a pure core with a thin shell

This is your first real design decision, and professionals use it everywhere:

```text
 ┌───────────── cli.js (the SHELL) ─────────────┐
 │ reads process.argv, asks the OS for data,    │   impure: talks to the outside world
 │ prints output, sets exit codes               │   (hard to test automatically)
 └───────────────┬──────────────────────────────┘
                 │ calls, passing plain data
 ┌───────────────▼──────────── main.js (the CORE) ─────────────┐
 │ formatBytes · formatUptime · memoryUsedPercent ·            │   pure: same input → same output,
 │ convertNumber · textBytes · buildReport(snapshot)           │   no printing, no OS calls
 └─────────────────────────────────────────────────────────────┘   (easy to test: main.test.js)
```

`buildReport` doesn't call `os.totalmem()` itself. Instead, `cli.js` collects a **snapshot** object and passes it in. That's why the tests can check the report using a *fake* machine.

## 📋 Requirements

### Core: `main.js` (checked by `main.test.js`)

| Function | Behaviour |
|---|---|
| `formatBytes(bytes)` | Same rules as Day 2 (copy **your own** solution) |
| `formatUptime(seconds)` | `'1d 4h 12m'`. Show days only if > 0; show hours if days or hours > 0; always show minutes. `59` → `'0m'`, `3600` → `'1h 0m'`, `90061` → `'1d 1h 1m'`, `86400` → `'1d 0h 0m'` |
| `memoryUsedPercent(total, free)` | Whole-number percentage used, rounded: `(16, 6)` → `63`. If `total` is 0 → `0` |
| `convertNumber(n)` | `{ decimal: '255', binary: '11111111', hex: 'FF' }`. Accepts a number **or** numeric string. Non-negative integers only, else `RangeError`. (Built-in `toString(2)` is allowed now.) |
| `textBytes(text)` | Same as Day 3's `byteReport` |
| `buildReport(snapshot)` | Returns the 7-line report shown above as one string joined with `'\n'`. See the snapshot shape in `main.js` |

### Shell: `cli.js`

- [ ] `report` is the default command; `help` prints usage.
- [ ] `convert <n>` prints decimal / binary / `0x` hex.
- [ ] `bytes <text>` prints characters / bytes / hex.
- [ ] Unknown commands or bad input: print a helpful message to **stderr** (`console.error`) and exit with code **1**.
- [ ] Everything else exits with code **0**.

## ✅ Acceptance criteria

- [ ] `node --test` is green
- [ ] Every command in the example session works on your machine
- [ ] `node cli.js convert -3`, `node cli.js convert 2.5` and `node cli.js dance` all exit with code 1 and a clear message
- [ ] `main.js` has **no** `console.log`, `process` or `os` in it (pure core!)
- [ ] You added **at least 3 tests of your own** in a new file `my.test.js` (copy the import style from `main.test.js`)
- [ ] `REPORT.md` written (see below)

## 📝 REPORT.md (write it in this folder)

1. What does the tool do? (2–3 sentences, for a non-programmer)
2. Why split into `main.js` and `cli.js`? What would be harder if everything were in one file?
3. One bug you hit and how you found it.
4. What would you add in version 2?

## 📊 Rubric (100 points → "Projects" score in PROGRESS.md)

| Area | Points | Full marks when… |
|---|---|---|
| Functionality | 40 | All commands and error cases behave exactly as specified |
| Code quality | 20 | Clear names, no copy-pasted blocks, small functions, pure core |
| Tests | 20 | Provided tests green + 3 meaningful tests of your own |
| Documentation | 10 | REPORT.md is clear and honest |
| Architecture | 10 | You can explain the core/shell split and its trade-offs |

## ⭐ Stretch goals

- `node cli.js watch`: reprint the memory line every second (`setInterval`), stop with Ctrl+C.
- `node cli.js disk <folder>`: use your Day 4 `summarizeFolder` + `formatBytes`.
- `--json` flag: print the report as JSON instead of text (think: why would *another program* prefer JSON?).
- Colours in the terminal using ANSI escape codes (look up `\x1b[32m`).

## 🚫 Rules

Write it yourself. Reuse **your own** code from this week (that's the point!). The `solution/` folder is for comparing *after* you've finished.
