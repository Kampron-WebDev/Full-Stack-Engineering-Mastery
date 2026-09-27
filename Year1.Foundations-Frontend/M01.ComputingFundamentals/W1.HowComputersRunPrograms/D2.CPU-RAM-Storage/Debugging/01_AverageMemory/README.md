# Debugging 01: Average Memory Usage

A monitoring tool records RAM usage (%) every minute. `averageUsage(samples)` should return the average.

```js
averageUsage([40, 60, 80])  // → 60
averageUsage([])            // → 0   (no samples yet: 0 is the agreed answer)
```

It returns `NaN` instead. There are **2 bugs**.

## Your task

1. `node --test`, then read the output.
2. Add `console.log(i, samples[i], total)` inside the loop and run the file's tests again. Watch what happens on the **last** step.
3. Fix both bugs. Explain each in MY-NOTES.md.

<details><summary>Hint for bug 1</summary>

An array of 3 items has indexes 0, 1, 2. What is `samples[3]`? What is `100 + undefined`?

</details>

<details><summary>Hint for bug 2</summary>

What is `0 / 0` in JavaScript?

</details>

🧠 **Why this matters:** `NaN` spreads like a virus. One `NaN` in a sum turns the total into `NaN`, and a dashboard shows blank charts with no error message. Off-by-one errors are among the most common bugs in all of programming.
