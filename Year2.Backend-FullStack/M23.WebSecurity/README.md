# Month 23: Web Security

[🏠 Course home](../../README.md) · [📅 Year 2](../README.md) · ⬅ [M22 Advanced Next.js](../../Year2.Backend-FullStack/M22.AdvancedNextJS/README.md) · ➡ [M24 Full-Stack Capstone](../../Year2.Backend-FullStack/M24.FullStackCapstone/README.md)

**Year 2: Backend & Full-Stack Engineering** · Status: 📋 **Planned**: detailed daily lessons are written just before you reach this month

## 🧸 The big idea

To defend a castle you must think like the attacker. You break your own practice apps in a safe lab, then fix every hole.

## 🎯 By the end of this month you can…

- Explain the OWASP Top 10 with examples.
- Find and fix XSS, CSRF, SQL injection, SSRF and command injection.
- Configure CORS, CSP and security headers correctly.
- Protect secrets, rate-limit endpoints and manage dependency risk.
- Write a threat model.

## 📚 What you will study

- **Framework:** OWASP Top 10 · Threat modeling
- **Injection:** XSS · SQL injection · Command injection · SSRF
- **Browser:** CSRF · CORS · CSP · Security headers
- **Operations:** Broken authorization · Rate limiting · Secrets · Dependency attacks

## 🗓️ Four-week plan

| Week | Theme | Focus |
|---|---|---|
| W1 | Thinking Like an Attacker | OWASP Top 10 · Threat modeling (STRIDE) · Safe lab setup |
| W2 | Injection | SQL injection · Command injection · XSS |
| W3 | Browser Defences | CSRF · SSRF · CORS · CSP & headers |
| W4 | Authorization & Supply Chain + Lab | Broken access control · Rate limiting · Secrets · Dependency attacks |

Every week follows the same rhythm: **Days 1–5** lessons (10-part format) · **Day 6** project work · **Day 7** review + quiz.

## 🏗️ Month project: Attack & Fix Lab

Attack your own deliberately vulnerable test app in a local lab, then fix each vulnerability with tests proving it stays fixed.

- [ ] At least 8 vulnerability classes
- [ ] Exploit write-up + fix + regression test for each
- [ ] Threat model document
- [ ] Security headers score A

## 🧠 The three layers of learning

| Layer | Question for this month |
|---|---|
| 1 · **Use it** | How do I apply security controls? |
| 2 · **How it works** | How do these attacks work at the protocol level? |
| 3 · **When to use it** | Which risks matter most for this product? |

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
