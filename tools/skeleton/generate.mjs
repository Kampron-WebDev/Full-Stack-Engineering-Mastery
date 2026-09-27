import fs from 'node:fs';
import path from 'node:path';
import { years, months } from './curriculum.mjs';

const ROOT = 'C:/Users/QweQu Antwi/Desktop/Full-Stack-Engineering-Mastery';
const pad = (n) => String(n).padStart(2, '0');
const monthFolder = (m) => `M${pad(m.n)}.${m.slug}`;
const yearOf = (m) => years.find((y) => y.n === m.year);
const monthRel = (m) => `${yearOf(m).folder}/${monthFolder(m)}`;
const write = (rel, text) => {
  const p = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, text.trim() + '\n');
};

// Month 1, Week 1 is hand-written; these are its day folders.
const W1_DAYS = [
  ['D1.WhatIsSoftwareEngineering', 'What Is Software Engineering?'],
  ['D2.CPU-RAM-Storage', 'CPU, RAM & Storage'],
  ['D3.BinaryHexAndData', 'Binary, Hex & Data Representation'],
  ['D4.OSProcessesThreadsFiles', 'Operating Systems, Processes, Threads & Files'],
  ['D5.CompilersInterpretersRuntimes', 'Compilers, Interpreters & Runtimes'],
  ['D6.Project-SystemInspector', 'Project: System Inspector CLI'],
  ['D7.ReviewAndQuiz', 'Review & Weekly Quiz'],
];
const READY = { 1: 'W1' }; // month -> weeks with full content

const weightTable = (w) =>
  ['| Area | Weight |', '|---|---|', ...Object.entries(w).map(([k, v]) => `| ${k} | ${v}% |`)].join('\n');

// ───────────────────────── Month READMEs ─────────────────────────
for (const m of months) {
  const y = yearOf(m);
  const prev = months.find((x) => x.n === m.n - 1);
  const next = months.find((x) => x.n === m.n + 1);
  const link = (x) => (x ? `[M${pad(x.n)} ${x.title}](../../${monthRel(x)}/README.md)` : '');
  const nav = ['[🏠 Course home](../../README.md)', `[📅 Year ${y.n}](../README.md)`, prev && `⬅ ${link(prev)}`, next && `➡ ${link(next)}`]
    .filter(Boolean).join(' · ');
  const status = READY[m.n] ? `🟢 **In progress** (Week 1 lessons ready)` : '📋 **Planned**: detailed daily lessons are written just before you reach this month';

  const weekRows = m.weeks.map((w, i) => {
    const title = m.n === 1 ? `[${w.title}](${w.folder}/README.md)` : w.title;
    return `| W${i + 1} | ${title} | ${w.focus.join(' · ')} |`;
  });

  const md = `
# Month ${pad(m.n)}: ${m.title}

${nav}

**Year ${y.n}: ${y.title}** · Status: ${status}

## 🧸 The big idea

${m.bigIdea}

## 🎯 By the end of this month you can…

${m.outcomes.map((o) => `- ${o}`).join('\n')}

## 📚 What you will study

${Object.entries(m.topics).map(([g, items]) => `- **${g}:** ${items.join(' · ')}`).join('\n')}

## 🗓️ Four-week plan

| Week | Theme | Focus |
|---|---|---|
${weekRows.join('\n')}

Every week follows the same rhythm: **Days 1–5** lessons (10-part format) · **Day 6** project work · **Day 7** review + quiz.

## 🏗️ Month project: ${m.project.name}

${m.project.brief}

${m.project.features.map((f) => `- [ ] ${f}`).join('\n')}

## 🧠 The three layers of learning

| Layer | Question for this month |
|---|---|
| 1 · **Use it** | ${m.layers[0]} |
| 2 · **How it works** | ${m.layers[1]} |
| 3 · **When to use it** | ${m.layers[2]} |

## ✅ Progress gate

Do **not** move on just because the month ended. Move on when every box is ticked:

- [ ] **Explain it:** I can explain every outcome above out loud, simply, without notes.
- [ ] **Implement it:** I finished all exercises without looking at solutions first.
- [ ] **Debug it:** I fixed every debugging challenge and can say *why* each bug happened.
- [ ] **Use it in a project:** the month project meets every requirement above.
- [ ] **Explain its trade-offs:** I can answer the Layer 3 question with pros *and* cons.
- [ ] **Score:** the month assessment is **≥ 70%**, and I recorded it in [PROGRESS.md](../../PROGRESS.md).

## 📊 How this month is scored

${weightTable(y.weights)}
`;
  write(`${monthRel(m)}/README.md`, md);
}

// ───────────────────────── Month 1 week READMEs ─────────────────────────
const m1 = months[0];
m1.weeks.forEach((w, i) => {
  const ready = i === 0;
  const dayLines = w.days.map((d, j) => {
    const [code, ...rest] = d.split(' ');
    const name = rest.join(' ');
    return ready ? `| ${code} | [${name}](${W1_DAYS[j][0]}/README.md) |` : `| ${code} | ${name} |`;
  });
  write(`${monthRel(m1)}/${w.folder}/README.md`, `
# Month 01 · Week ${i + 1}: ${w.title}

[🏠 Course home](../../../README.md) · [📅 Month 01](../README.md)

**Status:** ${ready ? '🟢 Ready. Start with Day 1.' : '📋 Planned. Lessons are written when you finish the previous week.'}

## This week's focus

${w.focus.map((f) => `- ${f}`).join('\n')}

## Days

| Day | Lesson |
|---|---|
${dayLines.join('\n')}

${ready ? `## How to work through a day

1. Read the day's \`README.md\` top to bottom (parts 1–5).
2. Run every file in \`Examples/\` with \`node <file>.js\` and change things to see what breaks.
3. Do the \`Exercises/\` and make the tests go green (\`node --test\` inside the exercise folder).
4. Fix the \`Debugging/\` challenge.
5. Answer the architecture question and quiz **in writing**, in \`MY-NOTES.md\` in the day folder.
6. Write your reflection, then commit: \`git add . && git commit -m "M01 W1 D1 done"\`.` : ''}
`);
});

// ───────────────────────── Year READMEs + exams ─────────────────────────
const EXAMS = {
  1: {
    folder: 'Y1.Exam', title: 'Year 1 Exam',
    body: `
Three assessments. Each is scored separately, and you need **≥ 70% in all three** to start Year 2.

## 1 · Practical (3 days, timeboxed)

Build a frontend application **without tutorials or AI-written code** from a written spec (you get the spec on day 1).
Required: React + TypeScript, routing, forms with validation, API integration with loading/error states, accessibility, responsive design, and at least 10 meaningful tests.

## 2 · Technical (written + spoken)

Explain each of these out loud (record yourself) **and** in writing:

- The JavaScript runtime: call stack, event loop, microtasks vs macrotasks
- HTTP: a full request/response lifecycle, including DNS, TCP, TLS and caching
- React rendering: what triggers a render and what reconciliation does
- TypeScript: narrowing, generics and discriminated unions, with examples
- Git: what a commit, branch, merge and rebase actually are
- Accessibility: WCAG POUR, keyboard access, when to use ARIA

## 3 · Architecture

Design the **frontend structure of a large application** (e.g. a banking dashboard with 40 screens).
Deliver: folder structure, component hierarchy, state strategy (local/global/server), routing plan, API layer, testing strategy, accessibility plan, and the trade-offs you considered.

## If you do not pass

List your weak areas in PROGRESS.md, revisit those months' reviews and exercises for 1–2 weeks, then re-sit **only** the failed part.`,
  },
  2: {
    folder: 'Y2.Exam', title: 'Year 2 Exam',
    body: `
Three assessments. You need **≥ 70% in all three** to start Year 3.

## 1 · Practical (5 days, timeboxed)

From a written spec, build a full-stack feature set: Next.js or React + Node API, PostgreSQL schema + migrations, authentication with roles, validated inputs, an automated test suite (unit + integration + one E2E), and deployment.

## 2 · Technical

Explain in writing and out loud:

- The Node.js event loop and streams
- How PostgreSQL uses indexes, and how to read an EXPLAIN plan
- Transactions and isolation levels, with an example race condition
- Sessions vs JWT, and OAuth/OIDC flows
- The testing pyramid applied to a real project
- Server vs Client Components and caching in Next.js
- Five OWASP Top 10 risks: attack and defence for each

## 3 · Architecture

Design the backend + data model for a domain you have not built before (e.g. a clinic booking system):
ER diagram, API design, auth model, layering, error-handling strategy, test strategy, and security threats.

## If you do not pass

Revisit weak months, then re-sit only the failed part.`,
  },
  3: {
    folder: 'Y3.FinalAssessment', title: 'Year 3 Final Assessment',
    body: `
The graduation assessment. It is built around your **Month 36 Enterprise Capstone**.

## 1 · Capstone defence

Present the capstone (30–45 minutes, recorded). Walk through the architecture, then answer "why this and not that?" for every major decision.

## 2 · System design interview

Two 60-minute design sessions on systems you have not designed before, using the Month 33 framework.

## 3 · Incident simulation

Someone else (or a script) breaks your deployed system. Use your dashboards, logs and traces to find and fix it, then write a post-mortem.

## 4 · Technical breadth

Written answers covering Linux, Docker, CI/CD, cloud networking & IAM, Terraform state, observability, distributed-systems guarantees and AI evaluation.

## Graduation criteria

- All four parts ≥ 70%
- Portfolio complete (see the course README)
- You can explain every project in your portfolio without notes`,
  },
};

for (const y of years) {
  const ms = months.filter((m) => m.year === y.n);
  const ex = EXAMS[y.n];
  write(`${y.folder}/README.md`, `
# Year ${y.n}: ${y.title}

[🏠 Course home](../README.md)

> **Transformation:** ${y.transformation}

${y.goal}

| Month | Title | Project |
|---|---|---|
${ms.map((m) => `| ${pad(m.n)} | [${m.title}](${monthFolder(m)}/README.md) | ${m.project.name} |`).join('\n')}
| 🎓 | [${ex.title}](${ex.folder}/README.md) | |

## Scoring weights this year

${weightTable(y.weights)}
`);
  write(`${y.folder}/${ex.folder}/README.md`, `
# ${ex.title}

[🏠 Course home](../../README.md) · [📅 Year ${y.n}](../README.md)

${ex.body}

## Scoring weights

${weightTable(y.weights)}
`);
}

// ───────────────────────── PROGRESS.md ─────────────────────────
write('PROGRESS.md', `
# 📈 My Progress

Fill this in at the end of every week (Day 7) and every month. Be honest: this file is for **you**.

**Started on:** ____-__-__

## Monthly scores

Scores are out of 100. Year 1–2 weights: Knowledge 25 · Coding 30 · Projects 30 · Architecture 15.
Year 3 weights: Knowledge 15 · Coding 25 · Projects 30 · Architecture 30.

| Month | Knowledge | Coding | Projects | Architecture | Weighted | Gate passed? | Date |
|---|---|---|---|---|---|---|---|
${months.map((m) => `| ${pad(m.n)} ${m.title} | | | | | | ☐ | |`).join('\n')}

## Year exams

| Exam | Practical | Technical | Architecture | Passed? | Date |
|---|---|---|---|---|---|
| Year 1 | | | | ☐ | |
| Year 2 | | | | ☐ | |
| Year 3 Final | | | | ☐ | |

## Weekly log

Copy this block for every week:

\`\`\`md
### Month __ · Week __ (dates)
- Quiz score: __ / __
- Exercises done without looking at solutions: __ / __
- Hardest thing this week:
- What finally made it click:
- What I will revisit:
\`\`\`
`);

console.log('Skeleton generated.');
