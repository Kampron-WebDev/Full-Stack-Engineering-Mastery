# Exercise 02: RPN Calculator (a stack machine)

**Goal:** build a **stack machine**, the same idea used by V8's bytecode interpreter, the Java Virtual Machine and WebAssembly.

## What is RPN?

In **Reverse Polish Notation** the operator comes **after** its two numbers:

| Normal | RPN |
|---|---|
| `3 + 4` | `3 4 +` |
| `(3 + 4) * 2` | `3 4 + 2 *` |
| `10 - 3` | `10 3 -` |

No parentheses are ever needed, and a computer can evaluate it with one simple **stack**:

```text
tokens:  3    4    +    2    *
stack:  [3] [3,4] [7] [7,2] [14]   → answer 14
```

- See a **number**? Push it onto the stack.
- See an **operator**? Pop the top two numbers, apply the operator, push the result.
  ⚠️ The **first** number you pop is the **right-hand** side: for `10 3 -` you pop `3`, then `10`, and compute `10 - 3`.
- At the end, exactly **one** number must be left. That's the answer.

## Your task

Complete `evaluateRPN(tokens)`. It receives token strings (like your tokenizer produces) and returns a number.

```js
evaluateRPN(['3', '4', '+', '2', '*'])  // → 14
evaluateRPN(['10', '3', '-'])           // → 7
evaluateRPN(['12', '4', '/'])           // → 3
evaluateRPN(['5'])                      // → 5
evaluateRPN(['1', '0', '/'])            // 💥 RangeError('Division by zero')
evaluateRPN(['+'])                      // 💥 Error (not enough numbers)
evaluateRPN(['1', '2'])                 // 💥 Error (numbers left over)
evaluateRPN([])                         // 💥 Error
```

## Check your work

```powershell
node --test
```

<details><summary>Hint 1</summary>

A JS array is already a stack: `stack.push(x)` and `stack.pop()`.

</details>

<details><summary>Hint 2</summary>

Before popping for an operator, check `stack.length < 2` and throw if so.

</details>

## ⭐ Stretch: a real (tiny) interpreter

Normal humans type `3 + 4 * 2`, not RPN. Write two more exported functions in `main.js`:

1. `toRPN(tokens)` converts normal (infix) tokens to RPN, respecting `*` `/` before `+` `-`, and parentheses. Look up **Dijkstra's shunting-yard algorithm**.
2. `calculate(expression)` = `evaluateRPN(toRPN(tokenize(expression)))`. Import `tokenize` from `'../01_Tokenizer/main.js'`.

```js
calculate('3 + 4 * 2')      // → 11
calculate('(3 + 4) * 2')    // → 14
```

You've then built **lexer → translator → stack-machine**: a genuine interpreter. The stretch tests are skipped until you export `calculate`.
