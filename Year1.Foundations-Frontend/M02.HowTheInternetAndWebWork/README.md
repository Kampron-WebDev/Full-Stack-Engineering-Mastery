# Month 02: How the Internet & Web Work

[🏠 Course home](../../README.md) · [📅 Year 1](../README.md) · ⬅ [M01 Computing Fundamentals](../../Year1.Foundations-Frontend/M01.ComputingFundamentals/README.md) · ➡ [M03 HTML Mastery](../../Year1.Foundations-Frontend/M03.HTMLMastery/README.md)

**Year 1: Software & Frontend Foundations** · Status: 📋 **Planned**: detailed daily lessons are written just before you reach this month

## 🧸 The big idea

The internet is a giant postal system. Every computer has an address (IP), every program has a door number (port), DNS is the phone book, and HTTP is the language letters are written in. This month you follow one letter from your keyboard to a server and back.

## 🎯 By the end of this month you can…

- Explain step by step what happens between typing example.com and seeing the page.
- Describe IP, ports, TCP, UDP, DNS, HTTP and HTTPS/TLS and how they stack together.
- Read and write raw HTTP requests and responses, including methods, headers and status codes.
- Explain cookies, sessions and caching and why each exists.
- Describe reverse proxies and CDNs and draw where they sit.

## 📚 What you will study

- **Networking:** Internet · IP addresses · TCP/IP · Ports · DNS
- **HTTP:** HTTP & HTTPS · TLS · Request/response lifecycle · Methods · Headers · Status codes
- **State & speed:** Cookies · Sessions · Caching
- **Architecture:** Browser rendering · Client/server · Reverse proxies · CDNs

## 🗓️ Four-week plan

| Week | Theme | Focus |
|---|---|---|
| W1 | Networks: The Postal System | IP addresses · Ports · TCP vs UDP · The TCP/IP model · DNS |
| W2 | HTTP: The Language of the Web | Request/response · Methods · Status codes · Headers · curl & DevTools Network tab |
| W3 | Security & Memory of the Web | HTTPS & TLS handshake · Cookies · Sessions · Caching headers |
| W4 | From Server to Pixels + Project | Browser rendering pipeline · Client/server architecture · Reverse proxies · CDNs · HTTP client project |

Every week follows the same rhythm: **Days 1–5** lessons (10-part format) · **Day 6** project work · **Day 7** review + quiz.

## 🏗️ Month project: Hand-made HTTP Client & Network Inspector

Build an HTTP client in JavaScript twice: once with a raw TCP socket (node:net) writing the HTTP text yourself, once with fetch. Inspect real requests and write the essay "What happens when I type example.com?".

- [ ] Raw GET over TCP (you write the request line and headers)
- [ ] Parse status line, headers and body yourself
- [ ] Same request with fetch, compare results
- [ ] DNS lookup with node:dns
- [ ] Written explanation with a diagram

## 🧠 The three layers of learning

| Layer | Question for this month |
|---|---|
| 1 · **Use it** | How do I make and inspect HTTP requests? |
| 2 · **How it works** | How do packets, DNS, TCP and TLS actually move my data? |
| 3 · **When to use it** | Where should caching, proxies and CDNs sit in a real architecture? |

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
