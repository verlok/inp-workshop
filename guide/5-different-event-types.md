# Experiment: different event types

What if we change the event types for the Event Handlers?  For example, replace one of the `click` event handlers with `pointerup` or `mouseup`?

Most interactions will fire many types of events, from pointer or key events, to hover, focus/blur, and synthetic events like beforechange and beforeinput.

Many real pages have handlers for many different events.

<details>
<summary>Answer</summary>

```js
button.addEventListener("click", () => {
  score.incrementAndUpdateUI();
});

button.addEventListener("pointerup", () => {
  blockFor(1000);
});
```

</details>

**Next: [Takeaway](https://github.com/malchata/inp-workshop/guides/6-takeaway.md)**
