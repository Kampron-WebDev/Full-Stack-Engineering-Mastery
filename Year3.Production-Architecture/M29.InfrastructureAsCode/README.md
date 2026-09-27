# Month 29: Infrastructure as Code (Terraform)

[🏠 Course home](../../README.md) · [📅 Year 3](../README.md) · ⬅ [M28 Cloud Fundamentals](../../Year3.Production-Architecture/M28.CloudFundamentals/README.md) · ➡ [M30 Observability](../../Year3.Production-Architecture/M30.Observability/README.md)

**Year 3: Production, Cloud, DevOps, Architecture & AI** · Status: 📋 **Planned**: detailed daily lessons are written just before you reach this month

## 🧸 The big idea

Instead of clicking around a cloud console, you write a recipe for your infrastructure. Recipes can be reviewed, versioned and re-run exactly.

## 🎯 By the end of this month you can…

- Write Terraform with providers, resources, variables and outputs.
- Manage state safely with remote backends and locking.
- Build reusable modules.
- Run separate dev/staging/prod environments from code.

## 📚 What you will study

- **Core:** Providers · Resources · Variables · Outputs
- **State:** State · Remote state · Locking
- **Scale:** Modules · Infrastructure environments

## 🗓️ Four-week plan

| Week | Theme | Focus |
|---|---|---|
| W1 | Terraform Basics | Why IaC · Providers & resources · plan/apply/destroy |
| W2 | Variables, Outputs, State | Variables · Outputs · How state works |
| W3 | Modules & Remote State | Modules · Remote backends · Locking |
| W4 | Environments + Project | Workspaces vs folders · Terraform in CI · Infra from code |

Every week follows the same rhythm: **Days 1–5** lessons (10-part format) · **Day 6** project work · **Day 7** review + quiz.

## 🏗️ Month project: SaaS Infrastructure from Code

Recreate the Month 28 AWS setup entirely with Terraform modules, with dev and prod environments.

- [ ] Reusable modules
- [ ] Remote state + locking
- [ ] Plan on PR, apply on merge
- [ ] Destroy/recreate drill

## 🧠 The three layers of learning

| Layer | Question for this month |
|---|---|
| 1 · **Use it** | How do I write Terraform? |
| 2 · **How it works** | How does Terraform diff desired vs real state? |
| 3 · **When to use it** | How should infra code be split across teams? |

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
