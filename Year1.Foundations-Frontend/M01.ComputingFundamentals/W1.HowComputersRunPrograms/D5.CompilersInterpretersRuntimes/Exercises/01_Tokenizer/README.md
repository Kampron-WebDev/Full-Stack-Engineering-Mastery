# Exercise 01: Tokenizer (a real lexer)

**Goal:** build step 1 of every compiler and interpreter: turn a string of maths into **tokens**.

## Your task

Complete `tokenize(expression)`. It returns an array of token **strings**.

Recognise:

| Kind | Examples |
|---|---|
| Numbers | `7`, `42`, `3.5`, `0.25` (digits, optionally one `.` with more digits) |
| Operators | `+` `-` `*` `/` |
| Parentheses | `(` `)` |
| Whitespace | spaces are **skipped** |

Anything else: throw a `SyntaxError` with the message `Unexpected character "<char>" at position <index>`.

```js
tokenize('12 + 3')              // → ['12', '+', '3']
tokenize('12+3')                // → ['12', '+', '3']      (spaces are optional)
tokenize('3.5 * (4 - 1)')       // → ['3.5', '*', '(', '4', '-', '1', ')']
tokenize('')                    // → []
tokenize('2 $ 3')               // 💥 SyntaxError: Unexpected character "$" at position 2
```

## Check your work

```powershell
node --test
```

<details><summary>Hint 1: the loop</summary>

Use an index `i` and a `while (i < expression.length)` loop, so **you** control when `i` moves forward.

</details>

<details><summary>Hint 2: numbers are several characters long</summary>

When you see a digit, keep moving `i` forward while the character is a digit or a `.`, then take `expression.slice(start, i)`.
Check for a digit with `ch >= '0' && ch <= '9'`.

</details>

<details><summary>Hint 3: one-character tokens</summary>

`'+-*/()'.includes(ch)` tells you if `ch` is an operator or parenthesis.

</details>
