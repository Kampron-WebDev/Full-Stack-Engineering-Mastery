# Day 4: Operating Systems, Processes, Threads & Files

[🏠 Course home](../../../../README.md) · [📅 Month 01](../../README.md) · [🗓️ Week 1](../README.md) · [⬅ Day 3](../D3.BinaryHexAndData/README.md) · [Day 5 ➡](../D5.CompilersInterpretersRuntimes/README.md)

**Month 01 · Week 1 · Day 4** · ⏱️ about 2–3 hours · Needs: Day 2

---

## 1. Concept

🧸 **Simple version: the school**

- The **operating system (OS)** is the **head teacher**. It decides which class uses the hall and when (CPU time), gives every class its own classroom (memory), looks after the filing cabinet (files), and stops one class from barging into another's room.
- A **process** is **one class in its own classroom**: a running program with its own private space. Chrome, VS Code and your Node script are separate processes.
- A **thread** is **one pupil working inside that classroom**. Several pupils (threads) share the same room and the same whiteboard (memory). They cooperate fast, but they can also scribble over each other's work.
- The **filesystem** is the **filing cabinet**: drawers (folders) inside drawers, holding papers (files).

🎓 **Precise version:**

- An **OS** (Windows, Linux, macOS, Android) manages hardware and gives programs safe, shared access to it. Its core is the **kernel**.
- A **process** is an instance of a running program. It has its own **virtual memory**, a **PID** (process ID), a parent process, environment variables, arguments, open files and at least one thread.
- A **thread** is an independent sequence of execution *inside* a process. Threads of the same process **share memory**.
- A **filesystem** organises storage into a tree of directories and files, with metadata such as size, timestamps and permissions.

## 2. Why it exists

Without an OS, every program would have to control the disk, screen and network card by itself, and one buggy program could overwrite another's memory or crash the machine.
The OS gives us:

- **Multitasking:** music plays while you code while the browser downloads.
- **Isolation:** a crash in one process doesn't take down the others.
- **Abstraction:** your code says "open file X" instead of "move disk head to sector 48213".
- **Security:** users, permissions and "you may not read that file".

## 3. Internal mechanics

### Kernel space vs user space, and system calls

```text
 ┌──────────── USER SPACE (your programs, limited powers) ────────────┐
 │  node app.js     chrome.exe     code.exe                           │
 └───────┬──────────────────────────────────────────────────┬─────────┘
         │ system calls: open, read, write, connect, fork… │
 ┌───────▼──────────────────────────────────────────────────▼─────────┐
 │  KERNEL (full powers): scheduler · memory manager · filesystem ·   │
 │                         drivers · network stack                    │
 └───────┬────────────────────────────────────────────────────────────┘
         ▼
     Hardware: CPU · RAM · disk · network card
```

When your JavaScript calls `fs.readFileSync('notes.txt')`, Node eventually asks the kernel with a **system call**. Your program never touches the disk directly.

### The scheduler: sharing the CPU

With 8 cores and 300 processes, the OS **scheduler** gives each thread a tiny **time slice** (a few milliseconds), then switches to another one (a **context switch**). It happens so fast that everything seems to run at once.

### Processes vs threads

| | Process | Thread |
|---|---|---|
| Memory | Its own, private | Shared with other threads of the same process |
| Creating one | Slower, heavier | Faster, lighter |
| If it crashes | Others survive | Can take the whole process down |
| Talking to others | Needs special channels (pipes, sockets, files) | Just read/write the shared memory. Fast, but risk of **race conditions** |

A **race condition** is when two threads change the same data at the same time and the result depends on luck. (You met this in the C++ concurrency lessons. In Month 34 you'll see the same problem between whole *servers*.)

### Node.js and threads

Your JavaScript runs on **one main thread**. Node hands slow work (file reads, DNS, crypto) to a small pool of helper threads behind the scenes, and runs your callback when it's done. So a **long calculation in your JS blocks everything**. `Examples/blocking.js` shows this.

### A process's toolkit

| Thing | In Node | What it's for |
|---|---|---|
| PID | `process.pid` | Identify it (e.g. to stop it) |
| Arguments | `process.argv` | `node app.js add Ama` → `[nodePath, scriptPath, 'add', 'Ama']` |
| Environment variables | `process.env` | Configuration and secrets (`DATABASE_URL`, `PORT`) |
| Current working directory | `process.cwd()` | Where relative paths start from |
| Exit code | `process.exit(1)` | **0 = success, anything else = failure** |
| stdin / stdout / stderr | `process.stdin`, `console.log`, `console.error` | Input, normal output, error output |

### The filesystem tree

```text
Windows:  C:\Users\Ama\Desktop\notes.txt      (drive letters, backslashes)
Linux:    /home/ama/Desktop/notes.txt          (one root "/", forward slashes)
```

- An **absolute path** starts from the root: `C:\…` or `/…`.
- A **relative path** starts from the current working directory: `./data/students.json`, `../README.md`.
- Use Node's `path.join()` instead of gluing strings with `\` or `/`. Your code then works on both Windows **and** the Linux servers it will eventually run on.

## 4. Simple examples

```powershell
cd Examples
node process-info.js hello world      # who am I? what are my arguments?
node files.js                         # list, create, read and delete a file
node exit-codes.js; echo "exit code was $LASTEXITCODE"
node blocking.js                      # watch a busy loop freeze a timer
```

On Windows, open **Task Manager → Details** while `blocking.js` runs and find `node.exe` and its PID.

## 5. Real-world examples

- **CI pipelines (Month 27)** decide pass/fail purely from **exit codes**. `node --test` exits with 1 when a test fails. That's how GitHub turns a pull request red.
- **Configuration via environment variables** is the standard for servers (the "Twelve-Factor App" rules). The same code runs in dev and production with different `DATABASE_URL`s, and secrets never go in the code.
- **Using all the cores:** one Node process uses about one core. Production setups run several processes (one per core) behind a load balancer, which is also why the Month 31 lessons insist on **stateless** servers.
- **"Works on my machine":** a path like `'data\\students.json'` works on Windows and breaks on the Linux server. `path.join('data', 'students.json')` works everywhere.
- **Docker containers (Month 26)** are just processes with extra isolation from the kernel.

## 6. Coding exercises

| # | Exercise | Skill |
|---|---|---|
| 1 | [Extension Counter](Exercises/01_ExtensionCounter/README.md) | `path` module, counting with an object |
| 2 | [Folder Summary](Exercises/02_FolderSummary/README.md) | Reading a real directory with `fs` |

## 7. Debugging challenge

[CLI Arguments](Debugging/01_CliArgs/README.md) has **2 bugs**.

## 8. Architecture question

> Your web server is a single Node process running on a machine with **8 CPU cores**. Traffic is growing.

In MY-NOTES.md:

1. Roughly how much of the machine's CPU power is this process able to use? Why?
2. Describe one way to use all 8 cores.
3. Currently, each user's **shopping cart is kept in a JavaScript object in the process's memory**. What goes wrong once there are 8 processes, and a user's requests land on different ones? Where could the cart live instead?

## 9. Short assessment

1. In one sentence each: what is an OS, a process and a thread?
2. Two threads vs two processes: which share memory?
3. What is a system call? Give an example of JS code that causes one.
4. What does exit code `0` mean? And `1`?
5. `node app.js add Ama`: what is `process.argv[2]`?
6. Why use `path.join` instead of `'folder' + '\\' + 'file'`?

<details><summary>Answers</summary>

1. OS: software that manages hardware and shares it safely between programs. Process: a running program with its own memory. Thread: a line of execution inside a process that shares the process's memory.
2. The two threads (of the same process).
3. A request from a program to the kernel to do something privileged, e.g. `fs.readFileSync('a.txt')` (open/read) or `fetch(...)` (network).
4. 0 = success; any non-zero value (such as 1) = failure.
5. `'add'` (index 0 is the Node executable, 1 is the script path).
6. The separator differs between operating systems (`\` on Windows, `/` on Linux/macOS); `path.join` uses the right one.

</details>

## 10. Reflection

In MY-NOTES.md:

- Explain processes vs threads to a 10-year-old with a new analogy of your own.
- Why do you think servers almost always run Linux?
- What is still fuzzy?

## 🔑 Key words

| Word | Meaning |
|---|---|
| Kernel | The core of the OS with full hardware access |
| System call | A program's request to the kernel |
| Process / PID | A running program / its ID number |
| Thread | A unit of execution inside a process, sharing its memory |
| Scheduler / context switch | Decides who runs next / the act of switching |
| Race condition | A bug where the result depends on the timing of concurrent code |
| Environment variable | A named setting passed to a process from outside |
| Exit code | A number a process returns when it ends (0 = OK) |
| Absolute / relative path | A path from the root / from the current directory |

## ✅ Done when

- [ ] I ran all four examples and found node.exe in Task Manager
- [ ] Both exercises are green
- [ ] CLI bugs fixed and explained
- [ ] Architecture answer, quiz and reflection in MY-NOTES.md
- [ ] Committed
