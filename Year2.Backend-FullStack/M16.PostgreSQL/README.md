# Month 16: PostgreSQL

[🏠 Course home](../../README.md) · [📅 Year 2](../README.md) · ⬅ [M15 Database Fundamentals](../../Year2.Backend-FullStack/M15.DatabaseFundamentals/README.md) · ➡ [M17 Backend Engineering & Express](../../Year2.Backend-FullStack/M17.BackendEngineeringAndExpress/README.md)

**Year 2: Backend & Full-Stack Engineering** · Status: 📋 **Planned**: detailed daily lessons are written just before you reach this month

## 🧸 The big idea

PostgreSQL is a professional-grade library with a genius librarian (the query planner). You learn how the librarian thinks so your questions are answered in milliseconds, not minutes.

## 🎯 By the end of this month you can…

- Explain PostgreSQL architecture and MVCC.
- Create the right indexes and read EXPLAIN ANALYZE plans.
- Choose isolation levels and understand locks.
- Use JSONB and full-text search.
- Design a production-quality schema for a large domain.

## 📚 What you will study

- **Internals:** PostgreSQL architecture · MVCC · Query planner · EXPLAIN
- **Performance:** Indexes · Performance tuning
- **Concurrency:** Transactions · Isolation · Locks
- **Features:** JSONB · Full-text search

## 🗓️ Four-week plan

| Week | Theme | Focus |
|---|---|---|
| W1 | Architecture & Types | Processes & memory · psql · Data types · JSONB |
| W2 | Indexes & Plans | B-tree/GIN/GiST · EXPLAIN ANALYZE · Query planner |
| W3 | Concurrency | MVCC · Isolation levels · Locks & deadlocks |
| W4 | Search, Tuning + Project | Full-text search · Performance tuning · University DB |

Every week follows the same rhythm: **Days 1–5** lessons (10-part format) · **Day 6** project work · **Day 7** review + quiz.

## 🏗️ Month project: University Management System Database

Design the database for a university: students, staff, departments, courses, enrolments, timetables and grades.

- [ ] Full ER diagram
- [ ] Seed data at realistic scale (100k+ rows)
- [ ] Indexed queries with EXPLAIN evidence
- [ ] Concurrency-safe enrolment

## 🧠 The three layers of learning

| Layer | Question for this month |
|---|---|
| 1 · **Use it** | How do I use PostgreSQL? |
| 2 · **How it works** | How do the planner, indexes and MVCC work? |
| 3 · **When to use it** | When do I need read replicas, partitioning or another database? |

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
