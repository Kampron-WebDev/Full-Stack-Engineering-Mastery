# Month 19: Prisma & Data Access

[🏠 Course home](../../README.md) · [📅 Year 2](../README.md) · ⬅ [M18 Authentication & Authorization](../../Year2.Backend-FullStack/M18.AuthenticationAndAuthorization/README.md) · ➡ [M20 Testing Engineering](../../Year2.Backend-FullStack/M20.TestingEngineering/README.md)

**Year 2: Backend & Full-Stack Engineering** · Status: 📋 **Planned**: detailed daily lessons are written just before you reach this month

## 🧸 The big idea

An ORM is a translator between your code's objects and the database's tables. Great translators save time, but you must still know both languages to spot mistranslations.

## 🎯 By the end of this month you can…

- Model schemas, relations and migrations in Prisma.
- Write queries, transactions and raw SQL when needed.
- Detect and fix N+1 queries.
- Design a data-access layer with the repository pattern.

## 📚 What you will study

- **Prisma:** Schema · Models · Relationships · Queries · Transactions · Migrations · Seeds · Raw SQL
- **Performance:** N+1 queries · Query optimization
- **Patterns:** Repository pattern · Data-access layers

## 🗓️ Four-week plan

| Week | Theme | Focus |
|---|---|---|
| W1 | Schema & Migrations | Models & relations · Migrations · Seeds |
| W2 | Querying | CRUD · Relations · Transactions · Raw SQL |
| W3 | Performance | N+1 · Select/include · Query logging |
| W4 | Data-Access Patterns + Project | Repository pattern · Unit of work · Migration of the REST API |

Every week follows the same rhythm: **Days 1–5** lessons (10-part format) · **Day 6** project work · **Day 7** review + quiz.

## 🏗️ Month project: Migrate the REST API to Prisma

Move the Month 17 API to Prisma behind repositories without changing the HTTP contract.

- [ ] Migrations & seeds
- [ ] Repository layer
- [ ] N+1 audit with before/after query counts
- [ ] Raw SQL for one reporting query

## 🧠 The three layers of learning

| Layer | Question for this month |
|---|---|
| 1 · **Use it** | How do I use Prisma? |
| 2 · **How it works** | What SQL does the ORM generate? |
| 3 · **When to use it** | When is an ORM the wrong choice? |

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
