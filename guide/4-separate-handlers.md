# Experiment: separate handlers

What if you move the work to a separate Event Handler?  Update the UI in one Event Handler, and block the page from a separate handler.

<details>
<summary>Answer</summary>

```js
button.addEventListener("click", () => {
  score.incrementAndUpdateUI();
});
  
button.addEventListener("click", () => {
  blockFor(1000);
});
```
</details>

**Next: [Experiment: different event types](https://github.com/malchata/inp-workshop/guides/5-different-event-types.md)**
