# 00 · Orientation: Set Up & Learn How to Learn

[🏠 Course home](../README.md) · Next: [Month 01 · Week 1 · Day 1 ➡](../Year1.Foundations-Frontend/M01.ComputingFundamentals/W1.HowComputersRunPrograms/D1.WhatIsSoftwareEngineering/README.md)

⏱️ About 1–2 hours. Do this **once**, before Day 1.

---

## 🧸 What is this course, really?

Imagine learning to become an architect of buildings. First you learn what bricks, wood and steel are. Then you build a shed, then a house, then an office block. Finally you design skyscrapers that other people build.

This course does the same with software:

```text
Year 1: bricks & sheds         (computers, the web, JavaScript, React)
Year 2: houses                 (full applications with servers and databases)
Year 3: skyscrapers & cities   (cloud, DevOps, architecture, AI)
```

---

## Step 1 · Install your tools

### Node.js (runs JavaScript on your computer)

Check what you have:

```powershell
node --version
```

This course uses the **current LTS** (Long-Term Support) version of Node, which is **v24 or newer**.
If you see `v20.x` or older, update. Node 20 stopped getting security fixes in April 2026:

```powershell
winget install OpenJS.NodeJS.LTS
```

Close and reopen your terminal, then run `node --version` again.

> 🧠 **Why LTS?** "Current" versions get new features first. LTS versions get *bug and security fixes for years*. Companies run LTS in production, so you should too.

### Git (the time machine for your code)

```powershell
git --version
git config --global user.name  "Your Name"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main
```

### VS Code

Open the course folder in VS Code. When it offers to install the **recommended extensions** (ESLint, Prettier, Markdown All in One), click **Install**.

| Shortcut | Does |
|---|---|
| **Ctrl+Shift+B** | Run the open `.js` file with Node |
| **Ctrl+Shift+P → "Tasks: Run Test Task"** | Test the exercise you have open |
| **F5** | Debug (set a red breakpoint dot first) |
| **Ctrl+`** | Open the terminal |
| **Ctrl+Shift+V** | Preview a Markdown file nicely |

---

## Step 2 · Make this course a Git repository (Day 0 habit)

You will study Git deeply in Month 7. But professionals commit **every day**, so you start now with just three commands.

```powershell
cd "$HOME\Desktop\Full-Stack-Engineering-Mastery"
git init
git add .
git commit -m "Start of my Full-Stack Engineering journey"
```

From now on, at the end of every study day:

```powershell
git add .
git commit -m "M01 W1 D1: what is software engineering"
```

🧸 A **commit** is a save point in a video game. If you break something tomorrow, you can always go back.

**Optional but recommended:** create a **private** GitHub repository and push to it, so your work is backed up and your consistency shows on your profile.

---

## Step 3 · How exercises work

Every exercise folder looks like this:

```text
01_HelloNode/
├── README.md        ← what to build
├── main.js          ← YOUR file: fill in the TODOs
├── main.test.js     ← the robot teacher that checks main.js (don't edit)
└── solution/
    └── main.js      ← the model answer (look only AFTER trying)
```

The loop is called **red → green**:

```powershell
cd 00.Orientation\Exercises\01_HelloNode
node --test          # ❌ red: tests fail because you haven't written the code yet
# ...edit main.js...
node --test          # ✅ green: all tests pass
```

Reading test output:

- `✔` means that check passed.
- `✖` means it failed. Look for **`expected`** (what the test wanted) and **`actual`** (what your code gave).

---

## Step 4 · The rules of this course

1. **Type the code yourself.** Don't copy-paste examples. Your fingers learn too.
2. **The 20-minute rule.** Stuck? Struggle for 20 honest minutes (re-read, `console.log`, rubber-duck it out loud). Then take *one* hint. Then the solution.
3. **AI is a tutor, not a ghostwriter.** Asking AI to *explain* a concept or an error is great. Asking it to *write your exercise* skips the part that makes you better. In Months 1–6 especially, write every line yourself.
4. **Write answers down.** Quiz answers, architecture answers and reflections go in `MY-NOTES.md` in each day folder. Writing forces clear thinking.
5. **Gates, not calendars.** You move on when you pass the gate, not when the month ends.
6. **Commit daily.** A small commit every study day.
7. **Be honest in [PROGRESS.md](../PROGRESS.md).** A low score you know about is far more useful than a fake high one.

---

## Step 5 · Your first exercise

1. Read the [JavaScript Survival Kit](JS-Survival-Kit.md). It is a one-page bridge from C++ to JavaScript, because Month 1 uses a little JS before JS is taught properly in Month 5.
2. Do [Exercise 01: Hello Node](Exercises/01_HelloNode/README.md).
3. Commit.

✅ **Orientation is done when:** Node LTS and Git are installed, the course is a Git repo with its first commit, and `01_HelloNode` is green.

➡ **Next:** [Month 01 · Week 1 · Day 1: What Is Software Engineering?](../Year1.Foundations-Frontend/M01.ComputingFundamentals/W1.HowComputersRunPrograms/D1.WhatIsSoftwareEngineering/README.md)
