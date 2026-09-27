# Debugging 01: Runtime Detector

Some code runs in **both** the browser and Node (Next.js does this all the time, Month 21). `describeRuntime(g)` looks at a global object `g` and reports where it's running:

```js
describeRuntime({ window: { document: {} } })          // → 'browser'
describeRuntime({ process: { versions: { node: '24.1.0' } } })  // → 'node 24.1.0'
describeRuntime({})                                    // → 'unknown'
```

(The tests pass in fake global objects, so we can test "browser" behaviour from inside Node.)

Right now it crashes with:

```text
TypeError: Cannot read properties of undefined (reading 'document')
```

That is probably **the most common JavaScript error in the world**. There are **2 bugs**, both the same kind.

## Your task

1. `node --test` and read the error messages.
2. Fix both bugs. Explain in MY-NOTES.md what "Cannot read properties of undefined" *means*.

<details><summary>Hint</summary>

What is `({}).window`? And what happens when you then ask for `.document` of *that*?
JavaScript has an operator made for exactly this situation: **optional chaining**, `a?.b`.

</details>
