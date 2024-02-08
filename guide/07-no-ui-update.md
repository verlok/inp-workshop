## Experiment: no UI update?

What if we remove the call to update UI from the event handler?

<details>
<summary>Answer</summary>

```js
button.addEventListener("click", () => {
  blockFor(1000);
  // score.incrementAndUpdateUI();
});
```
</details>

* The score does not update, but the page still does!
* Animations, CSS effects, default web component actions (form input), text entry, text highlighting...

**Next: [Experiment: input delay](https://github.com/verlok/inp-workshop/blob/main/guide/8-input-delay.md)**
