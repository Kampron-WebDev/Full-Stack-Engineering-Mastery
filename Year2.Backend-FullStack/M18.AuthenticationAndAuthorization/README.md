# Month 18: Authentication & Authorization

[🏠 Course home](../../README.md) · [📅 Year 2](../README.md) · ⬅ [M17 Backend Engineering & Express](../../Year2.Backend-FullStack/M17.BackendEngineeringAndExpress/README.md) · ➡ [M19 Prisma & Data Access](../../Year2.Backend-FullStack/M19.PrismaAndDataAccess/README.md)

**Year 2: Backend & Full-Stack Engineering** · Status: 📋 **Planned**: detailed daily lessons are written just before you reach this month

## 🧸 The big idea

Authentication asks "who are you?" (showing your ID card). Authorization asks "what are you allowed to do?" (which rooms your card opens). You build both yourself before letting a library hide them.

## 🎯 By the end of this month you can…

- Hash and verify passwords correctly.
- Implement sessions with secure cookies, and JWT with refresh tokens.
- Explain OAuth 2.0 and OpenID Connect flows.
- Implement RBAC and explain ABAC.
- Build email verification, account recovery and MFA.

## 📚 What you will study

- **Authentication:** Password hashing · Cookies · Sessions · JWT · Refresh tokens · MFA
- **Delegation:** OAuth · OpenID Connect
- **Authorization:** RBAC · ABAC
- **Account lifecycle:** Email verification · Account recovery

## 🗓️ Four-week plan

| Week | Theme | Focus |
|---|---|---|
| W1 | Passwords & Sessions | Hashing (argon2/bcrypt) · Cookies · Sessions |
| W2 | Tokens | JWT · Refresh tokens & rotation · Where to store tokens |
| W3 | OAuth, OIDC, MFA | OAuth 2.0 flows · OpenID Connect · TOTP MFA |
| W4 | Authorization + Project | RBAC · ABAC · Verification & recovery |

Every week follows the same rhythm: **Days 1–5** lessons (10-part format) · **Day 6** project work · **Day 7** review + quiz.

## 🏗️ Month project: Your Own Authentication System

Build auth from primitives: registration, login, sessions, refresh tokens, roles, email verification, password reset and MFA.

- [ ] Secure password storage
- [ ] Session + JWT variants
- [ ] RBAC middleware
- [ ] Email verification & reset
- [ ] TOTP MFA
- [ ] Threat notes

## 🧠 The three layers of learning

| Layer | Question for this month |
|---|---|
| 1 · **Use it** | How do I add login? |
| 2 · **How it works** | How do hashing, cookies and tokens actually protect users? |
| 3 · **When to use it** | Build or buy (Auth0, Clerk, etc.) for this product? |

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
