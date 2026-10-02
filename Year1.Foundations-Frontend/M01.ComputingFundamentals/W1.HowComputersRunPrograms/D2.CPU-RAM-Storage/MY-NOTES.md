# My Notes

# Debugging Challange

Bug 1: Loop goes over the length of the sample by one, so on the last pass undefined is produced, and total + undefined becomes NaN. and I fixed it by changing the <= to <
Bug 2: When an input is an empty array , the result is NaN because the 0/0 is NaN. and I fixed it by adding a guard against an empty samples to return 0 , on top of the loop.
I traced [73] and [] by hand and saw lines handles each one.

## Architecture question (my answer)

1.RAM is faster: Reading RAM takes about 100 ns; reading an SSD takes about 100,000 ns. Keeping popular profiles in RAM reduces database work.

2.Stale data: Users see the old profile until the RAM copy is updated or removed.

3.Cold start: A restart clears RAM. That’s fine if profiles are saved in the database: reload them into RAM. Requests may be slower while the cache fills.

## Quiz: my answers before checking

Match: CPU / RAM / SSD ↔ counter / chef / pantry.
What does volatile mean, and which of RAM and SSD is volatile?
Name the three steps of the CPU cycle.
Roughly how many times slower is a RAM read than an L1 cache read?
Why does looping over an array in order usually beat jumping around in it?
A friend says "my web page is slow, I'll buy a faster CPU." What question should you ask first?

1. CPU -> chef, RAM -> counter , SSD -> pantry

2. Volatile means data is lost when power is off. RAM is volatile

3. FETCH -> DECODE -> EXECUTE

4.100x

5.Looping order run fewer trips than jumping because of spatial locality

6.Where is the time going? It is the network, database or CPU.

## Reflection

**Explain it to a 10-year-old:** Imagine the CPU is a pupil doing homework:

- Registers: a card in their hand.
- Cache: books within reach.
- RAM: books on their desk.
- Storage: the school library.
  Quick access places hold less; slower places hold more. Computers mix them because fast memory is expensive.

**What surprised me:**

1. Rounding can create surprising results near unit boundaries, so the order of rounding and division matters.
2. Using `.length` means I don’t have to hard-code an array’s size.
3. I can now confidently manage parallel arrays by keeping matching items at the same index.
4. I was surprised by how much time computers spend waiting for data.

**Still fuzzy:**

<!-- athena:start -->

## 🦉 Athena: concepts I asked to be broken down

### Locality & cache lines · 2026-09-30

**Why I asked:** bytes, cache lines and STRIDE all at once: "I am lost".
**In plain words:** The CPU (my desk) fetches data from RAM (a library down the street) a whole _page_ at a time,
never one number. A page is a 64-byte **cache line** = 16 `Int32` numbers. Reading in order uses every number on
the page I fetched. Jumping around means nearly every number needs a new walk to the library.

```text
 32 numbers, 2 pages of 16, desk holds 1 page
 in order  0,1,2…31        → 2 trips
 jumping   0,16,1,17,2…    → 32 trips   (same sum, 16× the walking)
```

**Example (my machine, cache-demo.js):** in order ≈12 ms · stride 16 ≈39 ms (3×) · stride 64 ≈89 ms · stride 1024 ≈147 ms.
Only 3×, not 16×, because the CPU has a _prefetcher_ (a helpful librarian) that spots steady patterns and fetches ahead.
**Trap:** "same amount of work = same time". The _order_ you touch memory in can change the time many times over.
**Links:** ⬅ memory hierarchy, latency ladder (RAM ≈100× L1) · ↔ C++ arrays and `std::vector` are contiguous for exactly
this reason; Python lists hold pointers, so they get less of this benefit · ➡ Month 31 performance, database pages, CDNs

### Memory hierarchy: a school analogy · 2026-10-02

**Why I asked:** explain the memory hierarchy to a 10-year-old without the kitchen analogy.
**In plain words:** Imagine a pupil doing homework: the pupil is the CPU. The card in their hand is a register; nearby trays are caches; their desk is RAM; the school library is SSD/HDD storage. Places that are quickest to reach hold less, so keep today's work nearby and the big collection in storage. Very fast computer memory also costs more per byte.

```text
Hand → nearby trays (L1, L2, L3) → desk → school library
Registers → caches → RAM → SSD/HDD
Fast and small                  Slower and larger
```

**Example:** bring the needed book to the desk and keep the current fact on a card in your hand.
**Trap:** distance is only an analogy: memory technology also determines speed.
**Links:** ⬅ CPU working with data · ↔ variables in JS/Python/C++ use this hardware · ➡ understanding why caches help.

<!-- athena:end -->
