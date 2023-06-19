# Strategy 2: interrupt long running work

Here's what we want... even if we're in the middle of work, we want to *pause our busy work* to start handling any new interactions, right away.

Challenge: How can we do that?

There are some apis like `isInputPending`, but I think it's better to split long tasks up into chunks.

First attempt: let's do something simple. Replace this:

<details>
<summary>Answer</summary>

```js
button.addEventListener("click", () => {
  score.incrementAndUpdateUI();

  requestAnimationFrame(() => {
    setTimeout(() => blockFor(1000), 0);
  });
```
</details>

With this:

<details>
<summary>Answer</summary>

```js
button.addEventListener("click", () => {
  score.incrementAndUpdateUI();

  requestAnimationFrame(() => {
    setTimeout(() => blockFor(100), 0);
    setTimeout(() => blockFor(100), 0);
    setTimeout(() => blockFor(100), 0);
    // ... 10x times total
  });
});
```
</details>

This works by allowing the browser to schedule each task individually, and input can take higher priority!

This strategy works especially well when scheduling entry points&mdash;like if you have a bunch of independant features you need to call at application load time. Just loading scripts and running everything at script eval time may run everything in a giant long task by default.

However, this strategy doesn't work as well for breaking apart tightly coupled code&mdash;like a `for` loop that uses shared state.

**Next: [Strategy 2: now with yield()](https://github.com/malchata/inp-workshop/guides/20-now-yield.md)**
