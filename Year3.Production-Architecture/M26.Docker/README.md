# Month 26: Docker

[🏠 Course home](../../README.md) · [📅 Year 3](../README.md) · ⬅ [M25 Linux](../../Year3.Production-Architecture/M25.Linux/README.md) · ➡ [M27 CI/CD](../../Year3.Production-Architecture/M27.CICD/README.md)

**Year 3: Production, Cloud, DevOps, Architecture & AI** · Status: 📋 **Planned**: detailed daily lessons are written just before you reach this month

## 🧸 The big idea

A container is a lunchbox that holds your app plus everything it needs, so it works the same in every kitchen: your laptop, CI or the cloud.

## 🎯 By the end of this month you can…

- Explain containers vs virtual machines.
- Write efficient, secure Dockerfiles with multi-stage builds.
- Use volumes, networks and Compose for multi-service apps.
- Publish images to registries and scan them.

## 📚 What you will study

- **Core:** Containers · Images · Dockerfile · Multi-stage builds
- **Runtime:** Volumes · Networks · Compose
- **Distribution:** Registries · Container security

## 🗓️ Four-week plan

| Week | Theme | Focus |
|---|---|---|
| W1 | Containers & Images | Namespaces & cgroups · Images & layers · docker run |
| W2 | Dockerfiles | Layer caching · Multi-stage · .dockerignore · Non-root users |
| W3 | Multi-Service Apps | Volumes · Networks · Compose |
| W4 | Registries & Security + Project | Registries · Image scanning · Dockerize SaaS |

Every week follows the same rhythm: **Days 1–5** lessons (10-part format) · **Day 6** project work · **Day 7** review + quiz.

## 🏗️ Month project: Dockerize the SaaS

Containerise the Year 2 capstone with its database, cache and worker.

- [ ] Small, non-root images
- [ ] Compose for local dev
- [ ] Health checks
- [ ] Image scanned with zero critical CVEs

## 🧠 The three layers of learning

| Layer | Question for this month |
|---|---|
| 1 · **Use it** | How do I use Docker? |
| 2 · **How it works** | How do namespaces, cgroups and layers work? |
| 3 · **When to use it** | When are containers overkill? |

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
