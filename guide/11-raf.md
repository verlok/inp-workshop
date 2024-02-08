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

**Next: [Look at tooling](https://github.com/verlok/inp-workshop/blob/main/guide/12-look-at-tooling.md)**
