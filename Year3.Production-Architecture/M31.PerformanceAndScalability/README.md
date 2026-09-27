# Month 31: Performance & Scalability

[🏠 Course home](../../README.md) · [📅 Year 3](../README.md) · ⬅ [M30 Observability](../../Year3.Production-Architecture/M30.Observability/README.md) · ➡ [M32 Software Architecture](../../Year3.Production-Architecture/M32.SoftwareArchitecture/README.md)

**Year 3: Production, Cloud, DevOps, Architecture & AI** · Status: 📋 **Planned**: detailed daily lessons are written just before you reach this month

## 🧸 The big idea

Performance is how fast one customer is served. Scalability is serving a million customers without the kitchen catching fire. You measure first, then fix the real bottleneck.

## 🎯 By the end of this month you can…

- Measure and improve Core Web Vitals and bundle size.
- Optimise databases with pooling, indexing and query tuning.
- Use Redis caching, rate limiting and background jobs.
- Scale horizontally with load balancing, replication and CDNs.
- Load-test and read the results.

## 📚 What you will study

- **Frontend:** Core Web Vitals · Bundle size · Images · Lazy loading · Caching
- **Backend:** Connection pooling · Indexing · Query optimization · Redis · Rate limiting · Background jobs
- **System:** Load balancing · Horizontal scaling · Replication · CDN · Stateless architecture

## 🗓️ Four-week plan

| Week | Theme | Focus |
|---|---|---|
| W1 | Frontend Performance | Core Web Vitals · Bundles · Images · Lazy loading |
| W2 | Backend Performance | Pooling · Indexing · Query tuning · Redis caching |
| W3 | Work Off the Hot Path | Rate limiting · Background jobs · Queues |
| W4 | Scaling Out + Load Testing | Stateless services · Load balancing · Replication · k6 load tests |

Every week follows the same rhythm: **Days 1–5** lessons (10-part format) · **Day 6** project work · **Day 7** review + quiz.

## 🏗️ Month project: Scale the SaaS 10x

Load-test the SaaS, find bottlenecks, fix them and prove the improvement with numbers.

- [ ] Baseline + final load test reports
- [ ] Redis cache with invalidation plan
- [ ] Background job queue
- [ ] Horizontal scaling behind a load balancer

## 🧠 The three layers of learning

| Layer | Question for this month |
|---|---|
| 1 · **Use it** | How do I apply caching, pooling and queues? |
| 2 · **How it works** | Where does time actually go in a request? |
| 3 · **When to use it** | Which scaling approach fits the traffic and budget? |

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
