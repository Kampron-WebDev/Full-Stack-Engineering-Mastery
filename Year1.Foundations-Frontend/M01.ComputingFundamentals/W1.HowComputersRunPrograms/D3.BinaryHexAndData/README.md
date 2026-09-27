# Day 3: Binary, Hex & Data Representation

[🏠 Course home](../../../../README.md) · [📅 Month 01](../../README.md) · [🗓️ Week 1](../README.md) · [⬅ Day 2](../D2.CPU-RAM-Storage/README.md) · [Day 4 ➡](../D4.OSProcessesThreadsFiles/README.md)

**Month 01 · Week 1 · Day 3** · ⏱️ about 2–3 hours · Needs: Day 2

---

## 1. Concept

🧸 **Simple version:**
A computer is made of billions of tiny **light switches**. Each switch is either **off (0)** or **on (1)**. One switch is a **bit**.
With one switch you can say 2 things (yes/no). With 2 switches, 4 things. With 8 switches (a **byte**), 256 things: enough for every number from 0 to 255, or every letter on a keyboard.

**Everything** (numbers, text, photos, music, this web page) is just a long row of switches, plus an agreement about what the pattern means.

🎓 **Precise version:**

- **Binary (base 2)** uses digits 0 and 1. Each position is worth double the one to its right: 1, 2, 4, 8, 16…
- **Hexadecimal (base 16)** uses 0–9 and A–F (A=10 … F=15). **One hex digit = exactly 4 bits**, so one byte = two hex digits.
- **Data representation** is the agreed *encoding* that turns bits into meaning: integers, text (UTF-8), decimals (IEEE-754 floats), colours, and so on.

## 2. Why it exists

- **Why binary?** Electronics are very reliable at telling "on" from "off", and very unreliable at telling apart 10 voltage levels. Two states means fewer errors.
- **Why hex?** `11111111 00001010 10111110 11101111` is unreadable. The same thing in hex is `FF 0A BE EF`. Hex is a **human-friendly shorthand for binary**. That's why you see it in colours (`#FF8800`), memory addresses (`0x7ffe…`), Git commit IDs and error codes.

## 3. Internal mechanics

### Place value: the same idea in every base

```text
Decimal 237  =  2×100 + 3×10 + 7×1

Binary  1101 =  1×8 + 1×4 + 0×2 + 1×1  = 13

Hex     2F   =  2×16 + 15×1            = 47
```

### Decimal → binary: keep dividing by 2

```text
13 ÷ 2 = 6  remainder 1   ← last digit
 6 ÷ 2 = 3  remainder 0
 3 ÷ 2 = 1  remainder 1
 1 ÷ 2 = 0  remainder 1   ← first digit
Read the remainders bottom-up: 1101
```

Swap 2 for 16 and you get hex. You will code exactly this today.

### Binary ↔ hex: group in fours

```text
1011 1110  →  B  E  →  0xBE  (= 190)
```

### Negative integers: two's complement

For signed integers, the top bit means "negative". In 8 bits, `11111111` is **−1**, `10000000` is −128 and `01111111` is +127.
Add 1 to 127 in an 8-bit signed integer and you wrap around to −128. That is **overflow** (remember the Ariane 5 rocket on Day 1, and your C++ lessons).

### Text: characters are numbers too

- **ASCII** (1960s): 128 characters. `'A'` = 65 = `0x41`, `'a'` = 97.
- **Unicode**: a number (**code point**) for every character in every language, and for emoji: `'é'` = U+00E9, `'😀'` = U+1F600.
- **UTF-8**: the standard way to store Unicode as bytes. It uses a **variable length**: 1 byte for ASCII, 2 for `é`, 3 for most Asian scripts, 4 for emoji. Around 98% of websites use UTF-8.

### Decimals: why `0.1 + 0.2 !== 0.3`

JavaScript numbers are 64-bit **IEEE-754 floating-point** values. `1/3` can't be written exactly in decimal (0.3333…), and in the same way **0.1 can't be written exactly in binary**. It is stored as the closest approximation, so tiny errors appear:

```js
0.1 + 0.2        // 0.30000000000000004
```

Rules that follow from this:

1. **Never store money as floats.** Store whole **cents** (integers): `$19.99` → `1999`.
2. Integers are exact in JS only up to `Number.MAX_SAFE_INTEGER` (2⁵³ − 1 ≈ 9 quadrillion). For bigger ones, use `BigInt` (`123n`).

## 4. Simple examples

```powershell
cd Examples
node bases.js        # binary, hex, and bitwise tricks
node text-bytes.js   # how many bytes is a letter? an emoji?
node floats.js       # why 0.1 + 0.2 is weird, and how to handle money
```

## 5. Real-world examples

| Where | What's going on |
|---|---|
| CSS `#FF8800` | Three bytes in hex: red 255, green 136, blue 0 |
| IP address `192.168.1.10` | A 32-bit number, written as 4 bytes (Month 2) |
| Linux permission `755` | Octal (base 8) bits for read/write/execute (Month 25) |
| Git commit `a3f9c1e…` | A hash shown in hex (Month 7) |
| Payment APIs such as Stripe | Amounts are sent as integers in the **smallest currency unit** (cents), exactly to avoid float errors |
| "Max 280 characters" | Characters ≠ bytes: an emoji is 1 character but 4 UTF-8 bytes. Databases and APIs must decide which one they count. |

## 6. Coding exercises

| # | Exercise | Skill |
|---|---|---|
| 1 | [Base Converter](Exercises/01_BaseConverter/README.md) | Repeated division, place value, validation |
| 2 | [UTF-8 Byte Report](Exercises/02_Utf8Bytes/README.md) | Characters vs bytes, `TextEncoder`, hex formatting |

## 7. Debugging challenge

[Shopping Cart Total](Debugging/01_ShoppingCart/README.md): only 1 bug, but it's a deep one that costs real companies real money.

## 8. Architecture question

> You are designing the database for a **mobile wallet app** (like M-Pesa or MTN MoMo). Users send money, and balances must *never* be wrong.

In MY-NOTES.md:

1. What type would you store balances as, and why *not* a float?
2. Some currencies have 0 decimal places (Japanese yen), and some have 3 (Kuwaiti dinar). How does your design handle that?
3. What is the largest balance your design must support? Is `Number.MAX_SAFE_INTEGER` cents enough?

## 9. Short assessment

1. Convert 13 to binary, and `0xFF` to decimal.
2. How many different values fit in one byte?
3. Why do engineers use hex instead of binary when reading memory?
4. How many UTF-8 bytes does `'A'` use? And `'😀'`?
5. Why is `0.1 + 0.2 !== 0.3` in JavaScript?
6. How should you store `$19.99` in a database?

<details><summary>Answers</summary>

1. `1101`; 255.
2. 256 (0–255).
3. Each hex digit is exactly 4 bits, so it's a compact, lossless shorthand: 2 hex digits per byte.
4. 1 byte; 4 bytes.
5. 0.1 and 0.2 have no exact binary representation, so they are stored as approximations and the rounding errors show up in the sum.
6. As the integer `1999` (cents), with the currency stored alongside it.

</details>

## 10. Reflection

In MY-NOTES.md:

- Explain to a 10-year-old how a row of light switches can store the letter "A".
- Where have you seen hex before without knowing what it was?
- What is still fuzzy?

## 🔑 Key words

| Word | Meaning |
|---|---|
| Bit / byte | One 0-or-1 / 8 bits |
| Base / radix | How many digits a number system has (2, 10, 16) |
| Hexadecimal | Base 16; one digit = 4 bits |
| Two's complement | The standard way to store negative integers |
| Overflow | A value too big for its storage, which wraps around or breaks |
| Unicode / code point | The universal numbering of characters |
| UTF-8 | Variable-length encoding of Unicode into 1–4 bytes |
| Floating point | Approximate storage for decimals (IEEE-754) |

## ✅ Done when

- [ ] I ran all three examples
- [ ] Both exercises are green
- [ ] Shopping-cart bug fixed and explained
- [ ] Architecture answer, quiz and reflection in MY-NOTES.md
- [ ] Committed
