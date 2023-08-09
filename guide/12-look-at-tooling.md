# Look at tooling

On this page, responsiveness is super visual, with the scores and timers and the counter UI... but when testing the average page it is more subtle.

When interactions do run long, it's not always clear what the culprit is. Is it:

* Input Delay
* Event Processing Times
* Presentation Delay

On any page you want, you can use dev tools to help measure responsiveness.

* INP scores in console
  * JS is already added by default to this demo...
  * Expand details to see breakdowns
  * You can install the web-vitals extension on Chrome Desktop
  * You can add this JavaScript yourself to any page

* Performance Panel
  * Record trace
  * Interactions lane, main thread activity, screenshots.

Try adding a bit of all these problems to the page:

<details>
<summary>Answer</summary>

```js
setInterval(() => {
  blockFor(1000);
}, 3000);

button.addEventListener("click", () => {
  blockFor(1000);
  score.incrementAndUpdateUI();

  requestAnimationFrame(() => {
    blockFor(1000);
  });
});
```
</details>

...Then use the console and performance panel to diagnose the issue(s).

## Tooling Flow

This is a flow I find useful, every day:

1. Navigate the web, as I normally do
2. Leave DevTools console open, with the Web Vitals extension logging interactions
3. If I see a poorly performing interaction, I try to repeat
  * If I can't repeat, I use the console logs to get insights
  * If I can repeat, I record in performance panel

**Next: [Experiment: async effects](https://github.com/malchata/inp-workshop/blob/main/guide/13-async-effects.md)**
