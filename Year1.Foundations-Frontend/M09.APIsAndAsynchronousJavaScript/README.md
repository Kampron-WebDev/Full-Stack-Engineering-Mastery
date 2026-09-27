# Month 09: APIs & Asynchronous JavaScript

[🏠 Course home](../../README.md) · [📅 Year 1](../README.md) · ⬅ [M08 Accessibility & Responsive Engineering](../../Year1.Foundations-Frontend/M08.AccessibilityAndResponsiveEngineering/README.md) · ➡ [M10 UI/UX Engineering](../../Year1.Foundations-Frontend/M10.UIUXEngineering/README.md)

**Year 1: Software & Frontend Foundations** · Status: 📋 **Planned**: detailed daily lessons are written just before you reach this month

## 🧸 The big idea

An API is a restaurant menu for software. You order in a known format (a request) and the kitchen sends back your dish (a response). This month you learn to order well, wait politely and handle the kitchen being slow or wrong.

## 🎯 By the end of this month you can…

- Consume REST APIs with fetch and async/await.
- Handle pagination, authentication headers, API keys and rate limits.
- Build resilient clients with retries, backoff, timeouts and AbortController.
- Show loading, empty and error states properly.
- Explain REST vs GraphQL vs WebSockets vs webhooks.

## 📚 What you will study

- **REST:** GET · POST · PUT · PATCH · DELETE · JSON · Fetch API
- **Real-world concerns:** Pagination · Authentication headers · API keys · Rate limits · Retries · AbortController · Error handling
- **Other styles:** GraphQL · WebSockets · Webhooks

## 🗓️ Four-week plan

| Week | Theme | Focus |
|---|---|---|
| W1 | REST & fetch | REST ideas · Methods revisited · JSON · fetch + async/await |
| W2 | Real APIs | Pagination · Auth headers & API keys · Rate limits · Keeping secrets out of the browser |
| W3 | Resilience | Timeouts & AbortController · Retries with backoff · Error handling · UI states |
| W4 | Beyond REST + Project | GraphQL · WebSockets · Webhooks · Dashboard |

Every week follows the same rhythm: **Days 1–5** lessons (10-part format) · **Day 6** project work · **Day 7** review + quiz.

## 🏗️ Month project: Global Information Dashboard

A dashboard combining several public APIs (weather, countries, currency, news, etc.).

- [ ] At least 4 APIs
- [ ] Loading/empty/error states everywhere
- [ ] Retry + cancel
- [ ] Pagination or infinite scroll
- [ ] Client-side caching

## 🧠 The three layers of learning

| Layer | Question for this month |
|---|---|
| 1 · **Use it** | How do I call an API? |
| 2 · **How it works** | What happens on the network and in the event loop during a request? |
| 3 · **When to use it** | Which API style fits which problem? |

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
