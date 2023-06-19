# Experiment: async effects

Since you can start non-visual effects inside interactions, such as making network requests, starting timers, or just updating global state... What happens when those *eventually* update the page?

Let's wrap the contents of our event handler with a `setTimeout`.

What if it does/doesn't update UI?
What if it does/doesn't block?

<details>
<summary>Answer</summary>

```js
button.addEventListener("click", () => {
  setTimeout(() => {
    blockFor(1000);
    score.incrementAndUpdateUI();
  }, 1000);
});
```
</details>

However&mdash;what if I interact *again* after the async call resolves?

## Takeaway

As long as the *Next Paint* after Interaction is allowed to render, even if the browser decides it doesn't actually need a new rendering update, Interaction measurement stops.

Asynchronous effects, such as updates that come after timers or network response will *not* affect INP. Unless, of course, they actually block Next Paint, or the *next* Interaction (as input delay).

Another example: a `fetch()` or resource attached to dom elements, which is already prefetched may actually be available before the next rendering opportunity.

**Next: [Lesson: if you cannot remove it, at least move it!](https://github.com/malchata/inp-workshop/blob/main/guide/14-move-it.md)**
