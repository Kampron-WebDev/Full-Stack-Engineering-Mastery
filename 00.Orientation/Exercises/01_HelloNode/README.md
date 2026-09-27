# Exercise 01: Hello Node

**Goal:** prove your setup works and practise the red → green loop.

## Your task

Open `main.js` and complete the two functions.

### 1. `greet(name)`

Return the text `Hello, <name>! Welcome to Full-Stack Engineering.`

```js
greet('Ama')  // → 'Hello, Ama! Welcome to Full-Stack Engineering.'
```

### 2. `courseLength(years)`

Return an object describing how long the course is. A year has 12 months, and a month has 4 study weeks.

```js
courseLength(3)  // → { years: 3, months: 36, weeks: 144 }
```

## Check your work

```powershell
node --test
```

You should first see ❌ failures. Make them ✅.

<details><summary>Hint 1: template literals</summary>

Use backticks: `` `Hello, ${name}!` ``

</details>

<details><summary>Hint 2: returning an object</summary>

```js
return { years: years, months: ???, weeks: ??? };
```

</details>
