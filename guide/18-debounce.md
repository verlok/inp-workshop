# Strategy 1: debounce

A classic strategy... whenever interactions arrive in quick succession, and the processing or network effects are expensive... delay *starting* work on purpose so you can cancel and restart.

Useful for: autocomplete

* Use `setTimeout` to delay starting expensive work, with a timer&mdash;perhaps 500-1000ms
* save the timerid when you do so
* if a new interaction arrives, `clearTimeout` the previous

<details>
<summary>Answer</summary>

```js
let timer;
button.addEventListener("click", () => {
  score.incrementAndUpdateUI();

  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    blockFor(1000);
  }, 1000);
});
```
</details>

**Next: [Strategy 2: interrupt long running work](https://github.com/malchata/inp-workshop/blob/main/guide/19-interrupt.md)**
