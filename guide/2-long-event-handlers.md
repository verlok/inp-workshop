# Experiment: long-running event handlers

Open the `index.js` file, and comment out the `blockFor` function inside the event handler.

<details>
<summary>Answer</summary>

```js
button.addEventListener("click", () => {
  // blockFor(1000);
  score.incrementAndUpdateUI();
});
```
</details>

Try interacting with the page again.

## Rage clicks

What happens if you click multiple times, quickly?

This is sometimes called “rage clicking”.

When your site has slow responsiveness, we know from data that it increases rage clicks– and more rage clicks can further degrade responsiveness!

For the few steps, let's not focus on rage clicks. We’ll come back to these. For now, let’s focus on fixing the performance of a single discrete interaction.

**Next: [Experiment: Update UI first](https://github.com/malchata/inp-workshop/blob/main/guide/3-update-ui-first.md)**
