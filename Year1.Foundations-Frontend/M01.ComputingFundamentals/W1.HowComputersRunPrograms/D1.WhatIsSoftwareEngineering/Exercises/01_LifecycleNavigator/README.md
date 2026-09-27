# Exercise 01: Lifecycle Navigator

**Goal:** model the SDLC loop with an array, and practise indexes and `%`.

## Your task

`main.js` already has the phases in order:

```js
['requirements', 'design', 'implementation', 'testing', 'deployment', 'maintenance']
```

Complete:

### `nextPhase(phase)`

Returns the phase that comes next. After `'maintenance'` the cycle starts again at `'requirements'`.

```js
nextPhase('design')       // → 'implementation'
nextPhase('maintenance')  // → 'requirements'
```

### `previousPhase(phase)`

Returns the phase before. Before `'requirements'` comes `'maintenance'`.

```js
previousPhase('testing')       // → 'implementation'
previousPhase('requirements')  // → 'maintenance'
```

### Both functions

If `phase` is not in the list, **throw** an `Error` whose message contains `Unknown phase`.

```js
nextPhase('coding')  // 💥 Error: Unknown phase: coding
```

## Check your work

```powershell
node --test
```

<details><summary>Hint 1: finding the position</summary>

`PHASES.indexOf(phase)` gives the position, or `-1` if not found.

</details>

<details><summary>Hint 2: wrapping around</summary>

`(index + 1) % PHASES.length` wraps from the last index back to 0.
Going backwards, `(index - 1 + PHASES.length) % PHASES.length` avoids negative numbers.

</details>
