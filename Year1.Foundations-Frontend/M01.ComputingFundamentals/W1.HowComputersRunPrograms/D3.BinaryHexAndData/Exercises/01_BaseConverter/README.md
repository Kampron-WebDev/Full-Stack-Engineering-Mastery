# Exercise 01: Base Converter

**Goal:** implement base conversion yourself, the way the CPU-level maths really works.

🚫 **Not allowed:** `toString(2)`, `toString(16)`, `parseInt(…, 2)`, `Number('0b…')`. The point is to do it by hand.

## Your task

### `toBinary(n)`

Non-negative whole number → binary string.

```js
toBinary(0)    // → '0'
toBinary(5)    // → '101'
toBinary(13)   // → '1101'
toBinary(255)  // → '11111111'
toBinary(-1)   // 💥 RangeError
toBinary(2.5)  // 💥 RangeError
```

### `fromBinary(text)`

Binary string → number.

```js
fromBinary('101')       // → 5
fromBinary('11111111')  // → 255
fromBinary('')          // 💥 Error
fromBinary('102')       // 💥 Error (only 0 and 1 are allowed)
```

### `toHex(n)`

Non-negative whole number → **uppercase** hex string.

```js
toHex(0)      // → '0'
toHex(255)    // → 'FF'
toHex(4096)   // → '1000'
toHex(48879)  // → 'BEEF'
```

## Check your work

```powershell
node --test
```

<details><summary>Hint 1: toBinary</summary>

```text
while n > 0:
    remainder = n % 2        → put it at the FRONT of the result
    n = Math.floor(n / 2)
```

Remember the special case `0`. `Number.isInteger(n)` tells you whether `n` is a whole number.

</details>

<details><summary>Hint 2: fromBinary</summary>

Go left to right: `value = value * 2 + digit`. For `'101'`: 0→1→2→5.

</details>

<details><summary>Hint 3: toHex</summary>

Same as `toBinary` but with 16, and use `'0123456789ABCDEF'[remainder]` to get the digit.
**Bonus:** write one helper `toBase(n, base)` and use it for both.

</details>
