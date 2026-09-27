# Month 13: Advanced React

[🏠 Course home](../../README.md) · [📅 Year 2](../README.md) · ⬅ [M12 React Fundamentals](../../Year1.Foundations-Frontend/M12.ReactFundamentals/README.md) · ➡ [M14 Node.js](../../Year2.Backend-FullStack/M14.NodeJS/README.md)

**Year 2: Backend & Full-Stack Engineering** · Status: 📋 **Planned**: detailed daily lessons are written just before you reach this month

## 🧸 The big idea

Now you look under React's hood: when it re-draws, why, and how to stop wasted work. You also learn where different kinds of data should live.

## 🎯 By the end of this month you can…

- Explain rendering and reconciliation and fix unnecessary re-renders.
- Write custom hooks and use context and reducers well.
- Use error boundaries, Suspense and lazy loading.
- Profile and fix React performance problems.
- Choose between local state, Zustand, Redux Toolkit and TanStack Query.

## 📚 What you will study

- **Rendering:** Rendering · Reconciliation · Memoization · useMemo · useCallback
- **Patterns:** Custom hooks · Context · Reducers · Error boundaries · Suspense · Lazy loading
- **Performance:** Performance profiling
- **State management:** Zustand · Redux Toolkit · TanStack Query

## 🗓️ Four-week plan

| Week | Theme | Focus |
|---|---|---|
| W1 | Rendering Deep Dive | Render & commit · Reconciliation & keys · Memoization · Profiler |
| W2 | Reusable Logic | Custom hooks · Context · useReducer |
| W3 | Resilient UIs | Error boundaries · Suspense · Lazy loading & code splitting |
| W4 | State Management + Project | Client vs server state · Zustand · Redux Toolkit · TanStack Query |

Every week follows the same rhythm: **Days 1–5** lessons (10-part format) · **Day 6** project work · **Day 7** review + quiz.

## 🏗️ Month project: LMS Frontend Refactor

Refactor the Year 1 capstone: profile it, fix re-renders, move server data to TanStack Query and add error boundaries.

- [ ] Before/after profiler evidence
- [ ] Custom hooks library
- [ ] Server state via TanStack Query
- [ ] Error boundaries + Suspense

## 🧠 The three layers of learning

| Layer | Question for this month |
|---|---|
| 1 · **Use it** | How do I use hooks and state libraries? |
| 2 · **How it works** | How does React decide what to re-render? |
| 3 · **When to use it** | Which state belongs where in a large app? |

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
