# Lesson: if you cannot remove it, at least move it!

If async effects aren't measured, that's a great place to put our long-running code!

Let's change to update the UI from the click handler, but run the blocking work from the timeout.

<details>
<summary>Answer</summary>

```js
button.addEventListener("click", () => {
  score.incrementAndUpdateUI();

  setTimeout(() => {
    blockFor(1000);
  }, 100);
});
```
</details>

Can we do better than a fixed 100ms timeout?

We likely still want the code to run as quickly as possible... otherwise we should have just removed it!

Goal:
- Interaction will UpdateUI
- `BlockFor` will run as soon as possible, but not block next paint
- Predictable behaviour without "magic timeouts"

Here are some ideas:

* `setTimeout(0)`
* `Promise.then()`
* `requestAnimationFrame`
* `requestIdleCallback`
* `scheduler.postTask()`
* Anything else?
* Challenge: Web Worker

<details>
<summary>Answer</summary>

```js
button.addEventListener("click", () => {
  score.incrementAndUpdateUI();

  // Test one at a time!

  setTimeout(() => {
    blockFor(1000);
  }, 0);
  
  Promise.resolve().then(() => {
    blockFor(1000);
  });
  
  requestAnimationFrame(() => {
    blockFor(1000);
  });
  
  requestIdleCallback(() => {
    blockFor(1000);
  });
  
  scheduler.postTask(() => {
    blockFor(1000);
  }, { priority: "background", delay: 0 }); // "user-visible", "background"
});
```
</details>

**Next: [What worked, what did not?](https://github.com/verlok/inp-workshop/blob/main/guide/15-what-worked.md)**
