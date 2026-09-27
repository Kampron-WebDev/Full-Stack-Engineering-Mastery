# Day 1: What Is Software Engineering?

[🏠 Course home](../../../../README.md) · [📅 Month 01](../../README.md) · [🗓️ Week 1](../README.md) · Next: [Day 2 ➡](../D2.CPU-RAM-Storage/README.md)

**Month 01 · Week 1 · Day 1** · ⏱️ about 2–3 hours · Needs: [Orientation](../../../../00.Orientation/README.md) done

---

## 1. Concept

🧸 **Simple version:**
Cooking dinner for yourself is **programming**: you follow a recipe, and if it goes wrong, only you are hungry.
Running a restaurant that serves 1,000 people every day for 10 years is **software engineering**: many cooks, recipes that change, food-safety rules, a kitchen that must never burn down, and new staff who must understand everything.

🎓 **Precise version:**
**Programming** is writing instructions a computer can execute.
**Software engineering** is the discipline of building software that is *correct, maintainable, secure, scalable and affordable*, built by **teams**, over **time**.

Google's engineers summarise it well: *"Software engineering is programming integrated over time."* (from the book *Software Engineering at Google*). The code you write today will be read, changed, moved and debugged by other people, including future-you, for years.

| Programming asks… | Software engineering also asks… |
|---|---|
| Does it work? | Will it still work next year, with 100× the users? |
| Can I write it? | Can a new teammate understand and change it safely? |
| Is it fast enough on my laptop? | What happens when the server crashes at 3 a.m.? |
| Did I finish the feature? | Is it tested, secure, deployed, monitored, documented? |

## 2. Why it exists

In the 1960s, computers got powerful enough to run big programs, and big software projects started to fail badly: late, over budget, full of bugs. In **1968** a NATO conference called this the *"software crisis"* and made the term **software engineering** popular. The idea was to build software with the same care that engineers use to build bridges.

Two famous lessons:

- **Ariane 5 rocket (1996):** it exploded 37 seconds after launch because code reused from an older rocket converted a 64-bit decimal number into a 16-bit integer, and the number was too big (an *overflow*). You met overflow in C++. It is not an academic topic.
- **Knight Capital (2012):** a trading company deployed new code to only 7 of its 8 servers. The 8th ran old code, and in **45 minutes** the company lost about **$440 million**. The code wasn't the only problem. *Deployment* was.

Software engineering exists because **writing code is the easy part**. Making it keep working, for real people, over years, is the hard part.

## 3. Internal mechanics: how software is actually built

### The Software Development Life Cycle (SDLC)

```text
   ┌──────────────┐
   │ Requirements │  What problem? For whom? What must it do?
   └──────┬───────┘
          ▼
   ┌──────────────┐
   │    Design    │  Architecture, data model, APIs, screens
   └──────┬───────┘
          ▼
   ┌──────────────┐
   │Implementation│  Writing the code
   └──────┬───────┘
          ▼
   ┌──────────────┐
   │   Testing    │  Does it do what the requirements said?
   └──────┬───────┘
          ▼
   ┌──────────────┐
   │  Deployment  │  Getting it onto real servers / devices
   └──────┬───────┘
          ▼
   ┌──────────────┐
   │ Maintenance  │  Fix bugs, add features, keep it running
   └──────┬───────┘
          │  (feedback: new requirements)
          └──────────► back to Requirements
```

Modern teams (*Agile*) go around this loop **many times in small steps**, every week or two, instead of once for a whole year. Maintenance is usually the **most expensive** phase: most of a program's cost comes *after* its first release.

### The anatomy of a typical web application

```text
   [ Browser / Mobile app ]      ← FRONTEND: what users see and touch
             │  HTTP requests
             ▼
   [ Backend server / API ]      ← BACKEND: rules, security, calculations
             │  queries
             ▼
   [      Database      ]        ← DATA: remembers everything
             │
   [ Servers, network, cloud, CI/CD, monitoring ]  ← INFRASTRUCTURE / DEVOPS
```

### Roles, and where this course takes you

| Role | Focus | Where in this course |
|---|---|---|
| Frontend engineer | UI, browser, accessibility | Year 1 |
| Backend engineer | APIs, databases, security | Year 2 |
| Full-stack engineer | Both of the above | End of Year 2 |
| DevOps / Platform / SRE | Deploying, running, automating | Year 3 |
| Cloud engineer | AWS/Azure/GCP infrastructure | Year 3 |
| Software / Solutions architect | Designing whole systems, trade-offs | Year 3 and beyond |

## 4. Simple example

`Examples/tiny-app.js` is a whole "app" in one file, split into three **layers**: data, logic and presentation. Real apps have the same layers, just spread over many files and machines.

```powershell
cd Examples
node tiny-app.js
```

Then **change something**: add a student, change the pass mark, and see what changes.

## 5. Real-world example: ordering food on a delivery app

When you tap **"Order"**:

1. **Frontend** (the app) checks your form and sends a request.
2. **Backend** checks you are logged in, calculates price + delivery fee, and asks a **payment service** to charge you.
3. **Database** saves the order.
4. A **message queue** tells the restaurant's tablet and a rider's phone.
5. **Maps service** estimates arrival time.
6. **Monitoring** watches for errors. If payments start failing, an engineer's phone rings.

That one tap touches maybe **10 systems** built by **10 different teams**. None of them works alone. That is why engineering (communication, contracts, testing, reliability) matters as much as coding.

## 6. Coding exercises

| # | Exercise | Skill |
|---|---|---|
| 1 | [Lifecycle Navigator](Exercises/01_LifecycleNavigator/README.md) | Arrays, indexes, the modulo `%` trick |
| 2 | [Which Layer?](Exercises/02_WhichLayer/README.md) | Objects as lookup tables, string cleaning |

## 7. Debugging challenge

[Release Notes Formatter](Debugging/01_ReleaseNotes/README.md) has **2 bugs**. Find them, fix them, and explain each in MY-NOTES.md.

## 8. Architecture question

> A secondary school wants to replace its paper attendance register with an app. **Teachers** mark attendance on their phones. **Parents** can check whether their child was at school. The **head teacher** wants a weekly report.

In MY-NOTES.md, write:

1. Who are the users, and what does each need?
2. Draw (ASCII is fine) the frontend(s), backend and database.
3. Name **3 things that could go wrong in production** (think: no internet, wrong child marked, privacy) and one idea to handle each.

There is no single right answer. This is about *thinking like an engineer*.

## 9. Short assessment

Answer in MY-NOTES.md **first**, then check.

1. In one sentence, what is the difference between programming and software engineering?
2. Name the six SDLC phases in order.
3. Which phase usually costs the most over a program's life?
4. What caused the Ariane 5 failure, in plain words?
5. In a web app, which layer should decide whether a user is allowed to see another user's data: frontend or backend? Why?
6. What does "integrated over time" mean in "programming integrated over time"?

<details><summary>Answers</summary>

1. Programming makes the computer do something; software engineering makes software that keeps working, and stays changeable, for teams over time.
2. Requirements → Design → Implementation → Testing → Deployment → Maintenance.
3. Maintenance.
4. A number too big for a 16-bit integer was forced into one (overflow). The guidance software then got nonsense values.
5. **Backend.** The frontend runs on the user's device, so a user can change or bypass it. Security rules must be enforced where the user can't tamper with them.
6. Code lives for years; the real challenge is how it survives change, growth and new people, not just whether it works today.

</details>

## 10. Reflection

In MY-NOTES.md, in your own words:

- Explain "software engineering" to a 10-year-old in 3 sentences.
- Which role in the table excites you most right now, and why?
- What is still fuzzy?

## 🔑 Key words

| Word | Meaning |
|---|---|
| SDLC | Software Development Life Cycle: the phases software goes through |
| Requirements | What the software must do, and for whom |
| Frontend | The part users see and interact with |
| Backend | Server-side code: rules, security, data access |
| Deployment | Putting software onto the machines where users use it |
| Maintenance | Everything after release: fixes, updates, keeping it running |
| Agile | Working in small, repeated cycles instead of one big plan |

## ✅ Done when

- [ ] I ran `tiny-app.js` and changed something
- [ ] Both exercises are green (`node --test`)
- [ ] Debugging challenge fixed, with both bugs explained
- [ ] Architecture answer, quiz and reflection written in MY-NOTES.md
- [ ] Committed: `git commit -m "M01 W1 D1: what is software engineering"`
