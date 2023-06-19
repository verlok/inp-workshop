# Experiment: `requestAnimationFrame`

Let's simulate a long presentation delay using the `requestAnimationFrame()` API.

<details>
<summary>Answer</summary>

```js
button.addEventListener("click", () => {
  score.incrementAndUpdateUI();
  requestAnimationFrame(() => {
    blockFor(1000);
  });
});
```
</details>

**Next: [Look at tooling](https://github.com/malchata/inp-workshop/guides/12-look-at-tooling.md)**
