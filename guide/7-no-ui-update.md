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

* Score does not update&mdash;but the page still does!
* Animations, CSS effects, default web component actions (form input), text entry, text highlightling...

**Next: [Experiment: input delay](https://github.com/malchata/inp-workshop/guides/8-input-delay.md)**
