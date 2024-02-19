# What worked, and what did not?

Trick: `requestAnimationFrame` + `setTimeout`, a simple polyfill for `requestPostAnimationFrame`.

<details>
<summary>Answer</summary>

```js
function afterNextPaint(callback) {
  requestAnimationFrame(() => {
    setTimeout(callback, 0);
  });
}

button.addEventListener("click", () => {
  score.incrementAndUpdateUI();

  afterNextPaint(() => {
    blockFor(1000);
  });
});
```
</details>

Alternatively:

<details>
<summary>Answer</summary>

```js
function afterNextPaint(callback) {
  requestAnimationFrame(() => {
    setTimeout(callback, 0);
  });
}

function nextPaint() {
  return new Promise(resolve => afterNextPaint(resolve));
}

button.addEventListener("click", async () => {
  score.incrementAndUpdateUI();

  await nextPaint();
  blockFor(1000);
});
```
</details>

**Next: [Mid-point summary](https://github.com/verlok/inp-workshop/blob/main/guide/16-mid-point.md)**
