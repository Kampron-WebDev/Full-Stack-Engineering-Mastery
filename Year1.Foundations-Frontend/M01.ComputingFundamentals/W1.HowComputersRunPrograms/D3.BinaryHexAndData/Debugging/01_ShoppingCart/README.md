# Debugging 01: Shopping Cart Total

An online shop adds up the prices in a cart:

```js
cartTotal([0.1, 0.2])                // should be 0.3
cartTotal([19.99, 5.01, 0.1, 0.2])  // should be 25.3
```

Customers are complaining that the total sometimes shows as `$0.30000000000000004`, and the check `total === 0.3` in the payment code fails, so orders are rejected.

There is **1 bug**, but it's not a typo. It's a design mistake.

## Your task

1. Run `node --test` and look at the `actual` values.
2. Fix `cartTotal` so the tests pass. **Don't** just round the final answer with `toFixed`: that returns a *string*, and it hides the problem instead of fixing it.
3. In MY-NOTES.md, explain *why* the bug happens, and how real payment systems avoid it.

<details><summary>Hint</summary>

Integers are exact. Convert each price to **cents** first (`Math.round(price * 100)`), add up the cents, and convert back only at the very end.

</details>
