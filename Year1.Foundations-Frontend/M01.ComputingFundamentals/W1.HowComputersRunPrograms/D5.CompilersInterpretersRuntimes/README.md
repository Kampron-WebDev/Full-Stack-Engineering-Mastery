# Day 5: Compilers, Interpreters & Runtimes

[🏠 Course home](../../../../README.md) · [📅 Month 01](../../README.md) · [🗓️ Week 1](../README.md) · [⬅ Day 4](../D4.OSProcessesThreadsFiles/README.md) · [Day 6 ➡](../D6.Project-SystemInspector/README.md)

**Month 01 · Week 1 · Day 5** · ⏱️ about 2–3 hours · Needs: Days 2–4

---

## 1. Concept

🧸 **Simple version: translators**

The CPU only understands its own language, **machine code** (patterns of bits, Day 3). You write in a human-friendly language. Someone must translate.

- A **compiler** is like translating a **whole book before it's published**. It takes time up front, but readers then read quickly, and many mistakes are caught before printing. *(C++, Rust, Go)*
- An **interpreter** is like a **live interpreter at a meeting**, translating sentence by sentence as people speak. You can start immediately, but it's slower. *(early JavaScript, classic Python)*
- A **JIT (Just-In-Time) compiler** is a clever live interpreter who notices *"they keep saying this same sentence"* and writes a ready-made translation card for it. The first time is slow, and every later time is instant. *(modern JavaScript in V8, Java, C#)*
- A **runtime** is **the stage, the lights and the crew**: everything a program needs *while it runs*. That means the engine that executes it, plus tools such as timers, files and networking.

🎓 **Precise version:**

- **Compiler:** translates source code into another form (usually machine code) *before* execution → produces an executable.
- **Interpreter:** executes source code (or bytecode) directly, *during* execution.
- **Bytecode:** a compact, simplified instruction set for a **virtual machine** rather than a real CPU.
- **JIT compilation:** compiles frequently-run ("hot") code to machine code at runtime, using information gathered while running.
- **Runtime environment:** the engine plus the APIs and services available to running code. **Node.js** = the **V8** engine + **libuv** (event loop, async I/O) + core APIs (`fs`, `http`, `crypto`…).

## 2. Why it exists

Nobody wants to write `10110000 01100001` by hand, and each CPU family (x86, ARM) speaks a different machine language.
Translators let us write code **once**, in a language humans can read, and run it on many machines.

Different approaches make different **trade-offs**:

| | Compiled (C++) | Interpreted | JIT (JavaScript/V8, Java) |
|---|---|---|---|
| Start-up | Instant (already compiled) | Instant | Fast, then warms up |
| Peak speed | Fastest | Slowest | Close to compiled, for hot code |
| Errors found | Many at compile time | At runtime | At runtime (TypeScript helps, Month 11) |
| Portability | Recompile for each platform | Same code runs where the interpreter exists | Same code runs where the runtime exists |
| Example you know | `g++ main.cpp -o app` | early JS, shell scripts | `node app.js` |

## 3. Internal mechanics

### Every translator starts the same way

```text
source text      "let total = price * 2;"
     │
     ▼  1. LEXER (tokenizer): split the text into meaningful pieces (tokens)
tokens           [let] [total] [=] [price] [*] [2] [;]
     │
     ▼  2. PARSER: arrange the tokens into a tree that shows structure
AST              VariableDeclaration(total)
(abstract           └── BinaryExpression(*)
 syntax tree)            ├── Identifier(price)
                         └── NumberLiteral(2)
     │
     ▼  3. Then EITHER generate machine code (compiler)
        OR generate bytecode and run it (interpreter / VM)
```

**Today's exercises build step 1 (a tokenizer) and a stack-based evaluator**, the same idea as V8's bytecode interpreter. In the stretch goal they join together into a tiny working interpreter.

### How C++ gets to the CPU

```text
main.cpp → preprocessor → compiler → main.o (machine code) → linker → app.exe → OS loads it → CPU runs it
```

### How JavaScript gets to the CPU (V8)

```text
app.js → parser → AST → Ignition (bytecode interpreter) ──runs──► CPU
                              │  "this function ran 10,000 times with numbers…"
                              ▼
                       TurboFan (optimising JIT) → fast machine code ──► CPU
                              │  "…now it got a string! assumption broken"
                              ▼
                       deoptimise → back to bytecode
```

This is why **keeping types consistent** (always numbers, or always the same object shape) makes JavaScript faster. It's also one reason TypeScript is popular.

### The runtime: engine + APIs

```text
            ┌───────────── Browser runtime ─────────────┐   ┌──────────── Node.js runtime ───────────┐
Engine      │ V8 (Chrome/Edge), SpiderMonkey (Firefox)  │   │ V8                                      │
APIs        │ document, window, fetch, localStorage     │   │ fs, http, process, Buffer, fetch        │
Event loop  │ built into the browser                    │   │ libuv                                   │
            └───────────────────────────────────────────┘   └─────────────────────────────────────────┘
```

The **same JavaScript language** runs in both, but `document` doesn't exist in Node and `fs` doesn't exist in the browser. That's today's debugging challenge.

## 4. Simple examples

```powershell
cd Examples
node versions.js           # what is Node made of? (V8, libuv… versions)
node where-am-i.js         # detect which runtime the code is running in
node jit-warmup.js         # watch the same function get faster as V8 optimises it
node --print-bytecode --print-bytecode-filter=add bytecode.js   # see real V8 bytecode!
```

And compare with C++ (you have g++ from the C++ course):

```powershell
cd compare-cpp
g++ hello.cpp -o hello.exe   # step 1: translate the whole thing
./hello.exe                  # step 2: run pure machine code, no translator needed
node hello.js                # JS: translate and run in one go
```

## 5. Real-world examples

- **TypeScript** (Month 11) is *compiled* (transpiled) into JavaScript before it runs. Your CI pipeline does this "build step".
- **Bundlers** such as Vite and esbuild are compilers for the web: they turn many files into a few optimised ones.
- **Serverless cold starts** (Month 28): a new function instance hasn't JIT-warmed up yet, so the first request is slower.
- **Next.js** (Month 21) runs the same component code on the server (Node runtime) *and* in the browser. Code that touches `window` crashes on the server, which is exactly today's debugging bug.
- **Other runtimes:** Deno and Bun are alternative JavaScript runtimes. Java runs on the JVM; C# on .NET's CLR. **WebAssembly** lets compiled C++/Rust run inside the browser.

## 6. Coding exercises

| # | Exercise | Skill |
|---|---|---|
| 1 | [Tokenizer](Exercises/01_Tokenizer/README.md) | Reading text character by character, like a real lexer |
| 2 | [RPN Calculator](Exercises/02_RPNCalculator/README.md) | Stack machines, the core of bytecode interpreters (+ stretch: a tiny interpreter!) |

## 7. Debugging challenge

[Runtime Detector](Debugging/01_RuntimeDetector/README.md) crashes with the **most common JavaScript error in the world**. 2 bugs.

## 8. Architecture question

> Your team writes a web API in **TypeScript**, and it runs on Node in production.

In MY-NOTES.md:

1. Where in the journey *laptop → Git → CI → production server* should TypeScript be compiled into JavaScript?
2. Option A: the production server compiles TypeScript every time it starts. Option B: CI compiles once and ships plain JavaScript. List one advantage of each, and pick one.
3. Why might the **first** request after a deploy be slower than the rest?

## 9. Short assessment

1. Compiler vs interpreter, in one sentence each.
2. What does a lexer produce? And a parser?
3. What is bytecode?
4. What does "JIT" stand for, and why does it make JS fast?
5. Name the two big parts of the Node.js runtime besides its core APIs.
6. Why does `document.getElementById` crash in Node?

<details><summary>Answers</summary>

1. A compiler translates the whole program ahead of time into another form (usually machine code); an interpreter executes the program directly, step by step, while it runs.
2. A lexer produces **tokens**; a parser produces an **AST** (a tree of the program's structure).
3. A compact instruction set for a virtual machine (not a real CPU), executed by an interpreter.
4. Just-In-Time. It compiles "hot" code to optimised machine code while the program runs, using real type information.
5. The **V8** engine and **libuv** (event loop + async I/O).
6. `document` is a **browser** API, not part of the JavaScript language, so the Node runtime doesn't provide it.

</details>

## 10. Reflection

In MY-NOTES.md:

- Explain compiler vs interpreter vs JIT to a 10-year-old.
- You've now used C++ (compiled) and JavaScript (JIT). What differences did you *feel* while working with each?
- What is still fuzzy?

## 🔑 Key words

| Word | Meaning |
|---|---|
| Machine code | Binary instructions the CPU executes directly |
| Compiler | Translates source code ahead of time |
| Interpreter | Executes code directly at runtime |
| Lexer / token | Splits text into tokens / one meaningful piece of text |
| Parser / AST | Builds a structure tree / that tree |
| Bytecode / VM | Instructions for a virtual machine / the software that runs them |
| JIT | Compiling hot code during execution |
| Runtime | Engine + APIs available while code runs |
| V8 / libuv | Google's JS engine / Node's event loop and async I/O library |

## ✅ Done when

- [ ] I ran every example, including the bytecode printout and the C++ comparison
- [ ] Both exercises are green (stretch optional)
- [ ] Runtime-detector bugs fixed and explained
- [ ] Architecture answer, quiz and reflection in MY-NOTES.md
- [ ] Committed
