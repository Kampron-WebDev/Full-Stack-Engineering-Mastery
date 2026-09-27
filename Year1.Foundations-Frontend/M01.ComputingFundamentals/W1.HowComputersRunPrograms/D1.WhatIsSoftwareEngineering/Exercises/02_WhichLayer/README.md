# Exercise 02: Which Layer?

**Goal:** learn the four layers of a web system, and use an **object as a lookup table** (a tiny dictionary).

## Your task

Complete `layerOf(component)` in `main.js`. It returns which layer a component belongs to:

| Layer | Components |
|---|---|
| `'frontend'` | button, form, page, navigation menu |
| `'backend'` | api endpoint, authentication, business rules, email sending |
| `'database'` | table, index, backup, query |
| `'infrastructure'` | server, load balancer, cdn, ci pipeline |

Rules:

- Ignore capital letters and extra spaces at the start or end: `'  Load Balancer '` → `'infrastructure'`.
- Anything not in the table → `'unknown'`.

```js
layerOf('button')          // → 'frontend'
layerOf('  API Endpoint ') // → 'backend'
layerOf('CDN')             // → 'infrastructure'
layerOf('coffee machine')  // → 'unknown'
```

## Check your work

```powershell
node --test
```

<details><summary>Hint 1: cleaning the input</summary>

`text.trim().toLowerCase()` removes outer spaces and makes everything lowercase.

</details>

<details><summary>Hint 2: the lookup</summary>

Build an object whose **keys** are components and whose **values** are layers:

```js
const LAYERS = { 'button': 'frontend', 'api endpoint': 'backend' /* … */ };
```

`LAYERS[key]` is `undefined` when the key is missing. `LAYERS[key] ?? 'unknown'` gives a fallback.

</details>

**Think about it:** why is a lookup object better than 16 `if` statements? (Answer in MY-NOTES.md. You will meet this idea again as *hash maps* in Week 4.)
