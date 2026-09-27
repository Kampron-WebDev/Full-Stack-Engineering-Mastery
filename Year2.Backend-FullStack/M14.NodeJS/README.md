# Month 14: Node.js

[🏠 Course home](../../README.md) · [📅 Year 2](../README.md) · ⬅ [M13 Advanced React](../../Year2.Backend-FullStack/M13.AdvancedReact/README.md) · ➡ [M15 Database Fundamentals](../../Year2.Backend-FullStack/M15.DatabaseFundamentals/README.md)

**Year 2: Backend & Full-Stack Engineering** · Status: 📋 **Planned**: detailed daily lessons are written just before you reach this month

## 🧸 The big idea

Node.js is JavaScript let out of the browser and given the keys to the computer: files, network and processes. Learn Node itself before any framework hides it.

## 🎯 By the end of this month you can…

- Explain the Node runtime: V8, libuv and the event loop phases.
- Work with the filesystem, buffers and streams.
- Use events, EventEmitter, child processes and worker threads.
- Manage configuration with environment variables.
- Build an HTTP server with the raw http module.

## 📚 What you will study

- **Runtime:** Node runtime · Modules (ESM/CJS) · Event loop · Processes · Environment variables
- **I/O:** FS · Buffers · Streams
- **Concurrency:** Events · EventEmitter · Worker threads · Child processes

## 🗓️ Four-week plan

| Week | Theme | Focus |
|---|---|---|
| W1 | The Runtime | V8 + libuv · Modules · process & env · Event loop phases |
| W2 | Files, Buffers, Streams | fs promises · Buffers · Readable/Writable/Transform · Backpressure |
| W3 | Events & Concurrency | EventEmitter · Worker threads · Child processes |
| W4 | Raw HTTP + Project | http module · Routing by hand · Body parsing · CLI + server project |

Every week follows the same rhythm: **Days 1–5** lessons (10-part format) · **Day 6** project work · **Day 7** review + quiz.

## 🏗️ Month project: Node CLI + HTTP Server Without Express

A log-analysis CLI using streams, plus a small JSON API built with only node:http.

- [ ] Streams large files without loading them into memory
- [ ] Hand-written router
- [ ] JSON body parsing & error handling
- [ ] Graceful shutdown

## 🧠 The three layers of learning

| Layer | Question for this month |
|---|---|
| 1 · **Use it** | How do I use Node APIs? |
| 2 · **How it works** | How does libuv schedule I/O? |
| 3 · **When to use it** | When is Node the wrong tool (CPU-heavy work)? |

## ✅ Progress gate

Do **not** move on just because the month ended. Move on when every box is ticked:

- [ ] **Explain it:** I can explain every outcome above out loud, simply, without notes.
- [ ] **Implement it:** I finished all exercises without looking at solutions first.
- [ ] **Debug it:** I fixed every debugging challenge and can say *why* each bug happened.
- [ ] **Use it in a project:** the month project meets every requirement above.
- [ ] **Explain its trade-offs:** I can answer the Layer 3 question with pros *and* cons.
- [ ] **Score:** the month assessment is **≥ 70%**, and I recorded it in [PROGRESS.md](../../PROGRESS.md).

## 📊 How this month is scored

| Area | Weight |
|---|---|
| Knowledge | 25% |
| Coding | 30% |
| Projects | 30% |
| Architecture | 15% |
