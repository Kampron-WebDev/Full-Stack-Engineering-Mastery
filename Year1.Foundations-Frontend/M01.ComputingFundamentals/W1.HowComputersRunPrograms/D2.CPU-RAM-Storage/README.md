# Day 2: CPU, RAM & Storage

[🏠 Course home](../../../../README.md) · [📅 Month 01](../../README.md) · [🗓️ Week 1](../README.md) · [⬅ Day 1](../D1.WhatIsSoftwareEngineering/README.md) · [Day 3 ➡](../D3.BinaryHexAndData/README.md)

**Month 01 · Week 1 · Day 2** · ⏱️ about 2–3 hours · Needs: Day 1

---

## 1. Concept

🧸 **Simple version: the kitchen**

| Kitchen | Computer | Notes |
|---|---|---|
| 👩‍🍳 The chef | **CPU** | Does all the actual work, incredibly fast, but only with what's within reach |
| ✋ Chef's hands | **Registers** | Holds the few things being worked on *right now* |
| 🍽️ Small tray by the stove | **Cache** (L1, L2, L3) | Tiny, but super close |
| 🪵 Kitchen counter | **RAM** (memory) | Big working area. **Wiped clean when the restaurant closes** (power off) |
| 🏬 Pantry / warehouse | **Storage** (SSD / hard disk) | Huge and permanent, but a long walk away |

A program is a **recipe** stored in the pantry. To cook it, the ingredients (program + data) are brought to the counter (RAM), and the chef (CPU) works through the steps.

🎓 **Precise version:**

- **CPU (Central Processing Unit)** executes machine instructions. Modern CPUs have several **cores**, each an independent "chef", and run at about 3–5 **GHz** (billions of clock ticks per second).
- **RAM (Random-Access Memory)** holds running programs and their data. It is **volatile**: its contents disappear without power. "Random access" means any byte can be read equally fast by its address.
- **Storage (SSD/HDD)** is **non-volatile**: files survive power-off. It is much larger and much slower than RAM.

## 2. Why it exists: the speed / size / cost trade-off

Why not make *everything* as fast as the CPU's registers? Because fast memory is **expensive, power-hungry and physically small**.
So computers use a **memory hierarchy**: a little very fast memory, more medium memory, and lots of slow memory. The trick is to keep what you need *now* close to the CPU.

```text
          fast, tiny, expensive
               ▲   Registers
               │   L1 cache    (~32–64 KB per core)
               │   L2 cache    (~1–2 MB)
               │   L3 cache    (~8–64 MB, shared)
               │   RAM         (8–64 GB on laptops, TBs on servers)
               │   SSD         (256 GB – several TB)
               ▼   HDD / network storage
          slow, huge, cheap
```

## 3. Internal mechanics

### The fetch–decode–execute cycle

A CPU does one boring thing, billions of times per second:

```text
 ┌─► FETCH   : read the next instruction from memory (its address is in the Program Counter)
 │   DECODE  : figure out what it means ("add these two registers")
 │   EXECUTE : do it (the ALU, Arithmetic Logic Unit, does maths and logic)
 └── move the Program Counter to the next instruction, and repeat
```

Every `for` loop, every `if`, every React re-render eventually becomes millions of these tiny steps.

### Latency numbers every engineer should know (approximate)

| Action | Time | If 1 ns were 1 second… |
|---|---|---|
| L1 cache read | ~1 ns | 1 second |
| L2 cache read | ~4 ns | 4 seconds |
| RAM read | ~100 ns | ~1.7 minutes |
| SSD random read | ~100 µs (100,000 ns) | ~1.2 **days** |
| Hard disk seek | ~10 ms | ~4 **months** |
| Network round trip, same data centre | ~0.5 ms | ~6 days |
| Network round trip, Europe ↔ USA | ~150 ms | ~**4.8 years** |

**Read that table twice.** It explains why caching exists, why databases keep hot data in RAM, why a slow web page is usually **waiting** (for disk or network) rather than **calculating**, and why the Month 31 performance lessons start with *"measure where time goes."*

### Locality: why caches work

- **Temporal locality:** something used recently will probably be used again soon (a loop counter).
- **Spatial locality:** something *next to* what you used will probably be needed soon (the next array element).

The CPU fetches memory in **cache lines** of 64 bytes at a time. Walking through an array **in order** uses every byte of each fetched line. Jumping around wastes most of every fetch.

### Units

| Unit | Size |
|---|---|
| bit | a single 0 or 1 |
| byte (B) | 8 bits |
| KB | 1,024 bytes (strictly, 1,024 is a **KiB**; storage makers use 1,000, which is why a "1 TB" disk shows as ~931 GB in Windows) |
| MB, GB, TB | each ×1,024 again |

## 4. Simple examples

```powershell
cd Examples
node my-machine.js     # your CPU cores, RAM, free memory
node cache-demo.js     # same work, different memory order: see the time difference
```

In `cache-demo.js`, both loops add up **exactly the same numbers**. Only the **order** differs. Change `STRIDE` to 1, 4, 16, 64 and watch the time.

## 5. Real-world examples

- **Redis** (Month 31) is a database that keeps everything in **RAM**, so it answers in microseconds instead of milliseconds. The price: RAM is small and volatile, so you plan for restarts.
- **Server sizing:** cloud servers are priced by CPU cores *and* GB of RAM. A Node API that is slow because it waits on the database won't get faster with more CPU.
- **SSDs:** replacing a hard disk with an SSD makes an old laptop feel new. Look at the table: that's a ~100× jump for random reads.
- **Mobile apps** cache images on the phone so scrolling doesn't wait for the network every time.

## 6. Coding exercises

| # | Exercise | Skill |
|---|---|---|
| 1 | [Format Bytes](Exercises/01_FormatBytes/README.md) | Loops, division, units, `toFixed` |
| 2 | [Human-Scale Latency](Exercises/02_HumanLatency/README.md) | Choosing the biggest fitting unit |

## 7. Debugging challenge

[Average Memory Usage](Debugging/01_AverageMemory/README.md) has **2 bugs** (one classic off-by-one).

## 8. Architecture question

> Your app shows user profiles stored in a database on an SSD. Every second, 10,000 requests ask for the **same 100 popular profiles**. The database is struggling.

In MY-NOTES.md:

1. Using the latency table, explain *why* keeping those 100 profiles in RAM would help.
2. What problem appears if a user **updates** their profile but the RAM copy is old?
3. What happens to the RAM copy if the server restarts? Is that a disaster, or fine? Why?

(You have just invented **caching** and its two classic problems: *stale data* and *cold starts*.)

## 9. Short assessment

1. Match: CPU / RAM / SSD ↔ counter / chef / pantry.
2. What does *volatile* mean, and which of RAM and SSD is volatile?
3. Name the three steps of the CPU cycle.
4. Roughly how many times slower is a RAM read than an L1 cache read?
5. Why does looping over an array in order usually beat jumping around in it?
6. A friend says "my web page is slow, I'll buy a faster CPU." What question should you ask first?

<details><summary>Answers</summary>

1. CPU = chef, RAM = counter, SSD = pantry.
2. Volatile means it loses its contents without power. RAM is volatile; SSD is not.
3. Fetch, decode, execute.
4. About 100×.
5. Spatial locality: the CPU loads 64-byte cache lines, so neighbouring elements arrive "for free".
6. "Where is the time actually going?" It is usually waiting on the network, disk or database, not CPU. Measure before buying.

</details>

## 10. Reflection

In MY-NOTES.md:

- Explain the memory hierarchy to a 10-year-old using a different analogy than the kitchen.
- Which number in the latency table surprised you most?
- What is still fuzzy?

## 🔑 Key words

| Word | Meaning |
|---|---|
| CPU / core | The processor / one independent processing unit inside it |
| Clock speed (GHz) | Billions of CPU ticks per second |
| Register | Tiny storage inside the CPU for values being used right now |
| Cache (L1/L2/L3) | Small, fast memory between the CPU and RAM |
| RAM | Main working memory; volatile |
| Storage | Persistent memory (SSD, HDD) |
| Latency | How long one operation takes to *start* giving results |
| Locality | The tendency to reuse recent or nearby data |

## ✅ Done when

- [ ] I ran both examples and experimented with `STRIDE`
- [ ] Both exercises are green
- [ ] Debugging fixed and explained
- [ ] Architecture answer, quiz and reflection in MY-NOTES.md
- [ ] Committed
