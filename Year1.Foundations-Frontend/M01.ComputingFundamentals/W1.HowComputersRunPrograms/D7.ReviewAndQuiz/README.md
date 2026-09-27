# Day 7: Week 1 Review & Quiz

[🏠 Course home](../../../../README.md) · [📅 Month 01](../../README.md) · [🗓️ Week 1](../README.md) · [⬅ Day 6](../D6.Project-SystemInspector/README.md) · Next: [Week 2 ➡](../../W2.TerminalAndJavaScriptSurvivalKit/README.md)

**Month 01 · Week 1 · Day 7** · ⏱️ about 2–3 hours

Today has four parts: **(1)** see the whole week as one story, **(2)** take the quiz with no notes, **(3)** the no-hints challenge, **(4)** score yourself and check the gate.

---

## 1 · The whole week as one story: the journey of `node app.js`

Read this slowly. Every line is something you learned this week.

```text
You type:  node app.js  and press Enter
│
├─ The terminal asks the OS to start a new PROCESS                        (Day 4)
│    → it gets a PID, arguments (process.argv), environment variables
│
├─ The OS loads node.exe from the SSD into RAM                            (Day 2)
│    → SSD ~100 µs per read, RAM ~100 ns: that's why programs are loaded first
│
├─ The Node RUNTIME starts: V8 engine + libuv + core APIs                 (Day 5)
│
├─ V8 reads app.js (UTF-8 bytes → characters)                             (Day 3)
│    → LEXER makes tokens → PARSER makes an AST → Ignition makes BYTECODE (Day 5)
│
├─ The CPU runs it: fetch → decode → execute, billions of times/second    (Day 2)
│    → numbers are binary; 0.1 is approximate; strings are UTF-8/UTF-16   (Day 3)
│    → hot functions get JIT-compiled to machine code by TurboFan         (Day 5)
│
├─ app.js reads a file → a SYSTEM CALL to the kernel → filesystem → disk  (Day 4)
│
├─ Your code prints output (stdout) or errors (stderr)                    (Day 4)
│
└─ The process exits with an EXIT CODE: 0 = success, 1 = failure          (Day 4)
     → which is exactly how CI decides if your pull request is green       (Day 1: deployment matters!)
```

✍️ **Task:** close this page and redraw this journey from memory in MY-NOTES.md. Then compare. Anything you missed goes on your "revisit" list.

---

## 2 · Weekly quiz (no notes, 30 minutes)

Write your answers in MY-NOTES.md **before** opening any answer. 1 point each, 20 total.

**Software engineering (Day 1)**

1. Give two things software engineering cares about that "just programming" usually ignores.
2. Name the SDLC phases in order.
3. Why must authorization rules live on the backend, not the frontend?

**Hardware (Day 2)**

4. Put in order from fastest to slowest: SSD, L1 cache, RAM, network round trip Europe↔USA, L2 cache.
5. What does "volatile" mean for RAM?
6. Why is iterating through an array in order faster than jumping around?

**Data (Day 3)**

7. Convert 42 to binary and to hex.
8. `0b1111` = ? in decimal.
9. How many bytes does `'€'` take in UTF-8?
10. What does this print, and why? `console.log(0.1 + 0.2 === 0.3)`
11. How should money be stored?

**OS (Day 4)**

12. Process vs thread: which share memory?
13. What is a system call?
14. `node tool.js list --all`: what is `process.argv[3]`?
15. What exit code means success?

**Runtimes (Day 5)**

16. What does a lexer output? What does a parser output?
17. What's the difference between an interpreter and a JIT compiler?
18. Name the JS engine inside Node.js, and the library that gives Node its event loop.
19. Why does `document.title` crash in Node?

**Code reading**

20. What does this return, and why?

```js
function f(list) {
  let total = 0;
  for (let i = 0; i <= list.length; i++) total += list[i];
  return total;
}
f([1, 2, 3]);
```

<details><summary>✅ Answers (check only after writing yours)</summary>

1. Any two of: maintainability over time, teamwork, testing, security, deployment, monitoring, scalability, documentation.
2. Requirements → Design → Implementation → Testing → Deployment → Maintenance.
3. The frontend runs on the user's device and can be modified or bypassed; the backend is under your control.
4. L1 → L2 → RAM → SSD → Europe↔USA round trip.
5. Its contents are lost when power is removed.
6. Cache lines: the CPU loads 64 bytes at once, so neighbouring elements are already in the cache (spatial locality).
7. `101010`, `0x2A`.
8. 15.
9. 3 bytes (`e2 82 ac`).
10. `false`, because 0.1 and 0.2 can't be represented exactly in binary floating point, so the sum is 0.30000000000000004.
11. As integers in the smallest unit (cents), together with the currency.
12. Threads (of the same process).
13. A request from a program to the OS kernel to do a privileged operation (read a file, open a network connection…).
14. `'--all'` (0: node, 1: script, 2: `list`, 3: `--all`).
15. 0.
16. Tokens; an AST (abstract syntax tree).
17. An interpreter executes code step by step every time; a JIT compiler also compiles hot code to machine code while running, so repeated code gets much faster.
18. V8; libuv.
19. `document` is a browser API. The Node runtime doesn't provide it, so `document` is undefined (a ReferenceError).
20. `NaN`. The loop runs one step too far (`<=`); `list[3]` is `undefined`, and `6 + undefined` is `NaN`.

</details>

**Score:** ___ / 20 → Knowledge % = score × 5.

---

## 3 · No-hints weekly challenge

[Inspect Number](Exercises/01_InspectNumber/README.md) combines Days 2–3. No hints this time: you have everything you need.

---

## 4 · Explain it back (Feynman technique)

Record yourself (phone voice memo is fine) explaining each of these in **under 60 seconds**, as if to a 12-year-old. Listen back. Where you hesitated is where you need to revisit.

1. What happens when you run `node app.js`?
2. Why does a computer have both RAM and an SSD?
3. How can the number 65 be the letter "A"?
4. Why can one slow calculation freeze a whole Node server?
5. Why is the first request after a deploy sometimes slow?

---

## 5 · Score the week & check the gate

Fill in the weekly log in [PROGRESS.md](../../../../PROGRESS.md):

| Area | How to score it |
|---|---|
| Knowledge | Quiz % (section 2) |
| Coding | % of exercises + debugging challenges completed **without** opening the solution first (there were 15) |
| Projects | Your System Inspector rubric score (Day 6) |
| Architecture | Re-read your 5 architecture answers. Give each 0–4: did you name trade-offs, risks *and* a recommendation? Total × 5 = % |

**Week 1 gate:** all four areas ≥ 70%, and you can do explain-it-back items 1–5 without notes.

- ✅ **Passed?** Commit, take a proper rest, and start [Week 2](../../W2.TerminalAndJavaScriptSurvivalKit/README.md).
- 🔁 **Not yet?** Redo the lowest-scoring day's exercises **from scratch** (delete your main.js and start over), then retake the quiz in 2 days.

## 🗂️ Keep for later (spaced repetition)

Copy these into a flashcard app (Anki is free) or onto paper, and review them at the start of Weeks 2, 3 and 4:

- Latency: L1 1 ns · RAM 100 ns · SSD 100 µs · disk 10 ms · intercontinental 150 ms
- 1 byte = 8 bits = 2 hex digits = values 0–255
- `0.1 + 0.2 !== 0.3` → money in cents
- UTF-8: 1 byte ASCII, 2 é, 3 €, 4 emoji
- argv[0] node, argv[1] script, argv[2]+ yours
- Exit 0 = success
- Lexer → tokens · Parser → AST · Ignition → bytecode · TurboFan → machine code
- Node = V8 + libuv + APIs
