# Weekly Challenge: Inspect Number (no hints)

Complete `inspectNumber(n)`. For a non-negative whole number, return:

| Field | Meaning | For `255` |
|---|---|---|
| `decimal` | the number itself | `255` |
| `binary` | binary string | `'11111111'` |
| `hex` | uppercase hex string with `0x` prefix | `'0xFF'` |
| `bitsNeeded` | minimum bits needed to store it (0 needs 1 bit) | `8` |
| `bytesNeeded` | minimum whole bytes needed | `1` |
| `isPowerOfTwo` | true for 1, 2, 4, 8, … (0 is **not** a power of two) | `false` |

```js
inspectNumber(256)
// → { decimal: 256, binary: '100000000', hex: '0x100', bitsNeeded: 9, bytesNeeded: 2, isPowerOfTwo: true }
```

Anything that isn't a non-negative whole number → `RangeError`.

You may use `toString(2)` and `toString(16)`.

⭐ **Bonus thinking (MY-NOTES.md):** there's a famous one-line bit trick for `isPowerOfTwo` using `&`. Can you work out why `(n & (n - 1)) === 0` works? Try it on 8 (`1000`) and 7 (`0111`).

```powershell
node --test
```
