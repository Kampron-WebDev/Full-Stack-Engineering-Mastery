# My Notes

1. Some float numbers dont have their exact saved in memory, hence making operations on them produce different results, eg 0.1.
2. Since its a currency we have to convert it to the smallest unit which is whole perform the operation then convert it back.
3. Also number numbers like 1.1 becomes 110.00000000000001 after conversion , this also cause calculations inconsistencies, so I had to round them to the nearest whole number before calculations

## Architecture question (my answer)

1.I will store the balance in the smallest unit of the currency, which will be a whole number, because some floats do not have their exact stored in memory this makes with calculations eg. 1.1 ,0.1

2. So after calculating the smallest unit, which is a whole number. I will then convert it back to their apropriate decimal places
3. The largest balance will be 9007199254740991 from Number.MAX_SAFE_INTEGER.

## Quiz: my answers before checking

1. 13 -> 1101. 0xFF -> 255
2. 1 Byte = bits -> 8 , patterns -> 255
3. Hex digit -> 4 bits, hence its compact. 2 hex -> 1 byte instead of 8 bits
4. 'A' -> 1 bytes , '😀' - 4 bytes
5. 0.1 does not have the exact stored in memory ,hence adding it to 0.2 does not equal 0.3
6. 19.99 -> 1999

## Reflection

**Explain it to a 10-year-old:**
The letter "A" is represented by the number 65, And this digit needs to be converted to binary for storage. The binary storage uses bits 0/1 which will represent the switches. A bit can either be 1 or 0 not both.
"A" is stored in a byte that has 8 bits

values -> 127 64 32 16 8 4 2 1
bits -> 8 7 6 5 4 3 2 1
65 -> 0 1 0 0 0 0 0 1

Switches with 0 holds no value, 1 have their values stored.

**What surprised me:** Hex, Binary, padStart, .join() in array

**Still fuzzy:** How to solve problems using the right and correct design. I normally struggle on how to use the language efficiently but I believe it improve with time, because I am yet to delve deeper into the various languages.

<!-- athena:start -->

## 🦉 Athena: concepts I asked to be broken down

### Signed numbers and wrap-around · 2026-10-03

**Why I asked:** "Does it mean the end of the positive numbers jumps to negatives with signed?"
**In plain words:** Yes. A byte has 8 switches and no ninth, like a car odometer with a fixed number of wheels. Drive
an odometer backwards from `000` and it shows `999`: one step below zero, so we _agree_ it plays −1, and `998` plays −2.
A signed byte does the same, so its numbers sit on a circle. Step past the top (127) and I land on the bottom (−128).

```text
odometer   byte        unsigned   signed
  000     00000000        0          0
  999     11111111      255         -1
  998     11111110      254         -2
          01111111      127        127   ← top of signed
          10000000      128       -128   ← one step on: jumps to the bottom

unsigned: 0 … 255, and 255 + 1 wraps to 0
signed:   -128 … 127, and 127 + 1 wraps to -128
```

**Example (my machine):** `Int8Array`: 127 + 1 printed −128. `Uint8Array`: 255 + 1 printed 0.
**Trap:** reading every pattern by adding the columns. `11111110` is 254 only if the byte is unsigned; signed, it is −2.
The switches are the same, the agreement differs. Overflow is never random and gives no error.
**Links:** ⬅ place value, n bits → 2ⁿ patterns · ↔ C++ `int` vs `unsigned`, Ariane 5 (Day 1) · ➡ why money and counters need a big enough type

### Regex check for bad characters: `/[^01]/.test(text)` · 2026-10-04

**Why I asked:** I used this line in `fromBinary` and had to explain it piece by piece.
**In plain words:** A regular expression (regex) is a search pattern for text. This one goes hunting for ONE bad
character. If it finds any character that is not a 0 or a 1, the answer is `true`, and my function refuses the input.

```text
/[^01]/.test(text)

 /  …  /       start and end of the pattern
 [01]          one character that is a 0 or a 1
 [^01]         ^ inside the brackets flips it: one character that is NOT a 0 or a 1
 .test(text)   is there a match anywhere in text?  → true or false
```

**Example (my machine):** `/[^01]/.test('102')` → `true` (the 2 is bad) · `/[^01]/.test('101')` → `false` (nothing bad).
**Trap:** reading it as "true when the text is only 0s and 1s". It is the opposite: `true` means a bad character was found.
Also, it says `false` for an empty string (nothing bad in it), so the empty check `text.length === 0` is still needed.
**Links:** ⬅ text is characters, validation before work · ↔ Python has the same idea in its `re` module · ➡ form validation, searching logs

### One byte → two hex characters: `byte.toString(16).padStart(2, "0")` · 2026-10-04

**Why I asked:** "Explain this code: `hex += byte.toString(16).padStart(2, "0") + " ";`"
**In plain words:** The line does four small jobs, left to right, for ONE byte, then sticks the result on the end of
the string I am building. `padStart` is like writing 07 instead of 7 on a form with two boxes: it fills the front.

```text
byte.toString(16)      number → hex text            195 → 'c3'      10 → 'a'
.padStart(2, "0")      make it 2 characters long,   'c3' → 'c3'     'a' → '0a'
                       adding "0" at the FRONT
+ " "                  put a space after it         'c3 '
hex += …               add all that to the END of hex (same as hex = hex + …)

loop over 65, 195, 169:   ''  →  '41 '  →  '41 c3 '  →  '41 c3 a9 '
```

**Example (my machine):** `(10).toString(16)` → `a` · `(10).toString(16).padStart(2, "0")` → `0a`.
**Trap 1:** without `padStart`, a small byte gives one character, so the pairs stop lining up (one byte must be two hex digits).
**Trap 2:** adding `" "` after EVERY byte leaves one extra space at the very end: `'41 c3 a9 '`.
**Links:** ⬅ hex: one byte = two hex digits; my own `toHex` · ↔ Python: `format(byte, "02x")` · ➡ reading hex dumps, colours like `#0a0a0a`

<!-- athena:end -->
