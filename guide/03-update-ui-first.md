# Experiment: update UI first

What happens if you swap the order of js calls -- `updateUI()` first, then `block()`?

Did you notice the UI appear earlier?  Does the order affect INP scores?

<details>
<summary>Answer</summary>

```js
button.addEventListener("click", () => {
  score.incrementAndUpdateUI();
  blockFor(1000);
});
```
</details>

**[Experiment: separate handlers](https://github.com/verlok/inp-workshop/blob/main/guide/04-separate-handlers.md)**
