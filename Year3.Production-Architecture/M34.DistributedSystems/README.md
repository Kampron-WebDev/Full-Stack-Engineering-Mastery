# Month 34: Distributed Systems

[🏠 Course home](../../README.md) · [📅 Year 3](../README.md) · ⬅ [M33 System Design](../../Year3.Production-Architecture/M33.SystemDesign/README.md) · ➡ [M35 AI Engineering](../../Year3.Production-Architecture/M35.AIEngineering/README.md)

**Year 3: Production, Cloud, DevOps, Architecture & AI** · Status: 📋 **Planned**: detailed daily lessons are written just before you reach this month

## 🧸 The big idea

A distributed system is a team of computers passing notes. Notes get lost, arrive twice or arrive late, and computers disagree. You learn why tools like Kafka exist, not just their APIs.

## 🎯 By the end of this month you can…

- Explain CAP/PACELC and consistency models.
- Explain replication, partitioning and consensus at an intuitive level.
- Design idempotent operations and sagas instead of distributed transactions.
- Build event-driven flows with queues (BullMQ, RabbitMQ, Kafka).

## 📚 What you will study

- **Theory:** CAP theorem · Consistency · Availability · Eventual consistency
- **Data:** Replication · Partitioning · Consensus
- **Correctness:** Distributed transactions · Sagas · Idempotency · Outbox pattern
- **Messaging:** Message queues · Event-driven systems · Kafka · RabbitMQ · BullMQ

## 🗓️ Four-week plan

| Week | Theme | Focus |
|---|---|---|
| W1 | Theory | Failure is normal · CAP & PACELC · Consistency models |
| W2 | Replication & Partitioning | Leader/follower · Partitioning · Consensus intuition (Raft) |
| W3 | Correctness | Idempotency · Sagas · Outbox · Exactly-once myths |
| W4 | Messaging + Project | Queues vs logs · BullMQ · RabbitMQ · Kafka |

Every week follows the same rhythm: **Days 1–5** lessons (10-part format) · **Day 6** project work · **Day 7** review + quiz.

## 🏗️ Month project: Event-Driven Order System

An order/payment/inventory flow across services using events, idempotency and a saga.

- [ ] Idempotent consumers
- [ ] Saga with compensation
- [ ] Outbox pattern
- [ ] Chaos test: kill a service mid-flow

## 🧠 The three layers of learning

| Layer | Question for this month |
|---|---|
| 1 · **Use it** | How do I use a message queue? |
| 2 · **How it works** | How do replication and delivery guarantees work? |
| 3 · **When to use it** | Do I even need to distribute this? |

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
| Knowledge | 15% |
| Coding | 25% |
| Projects | 30% |
| Architecture | 30% |
