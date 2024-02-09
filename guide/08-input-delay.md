# Experiment: input delay

What about long-running code outside of Event Handlers?

For example, if you had a late-loading `<script>` that randomly blocked the page during load.

Or, an API, such as `setInterval`, that periodically blocks the page?

<details>
<summary>Answer</summary>

```js
setInterval(() => {
  blockFor(1000);
}, 3000);


button.addEventListener("click", () => {
  score.incrementAndUpdateUI();
});
```
</details>

These long-running periods are often called Long Tasks.

Notice, it doesn't *always* affect my interactions!  If I'm not clicking when the task is running, I may get lucky. Such "random" sneezes can be a nightmare to debug when they only sometimes cause issues.

One way to track these down is by measuring Long Tasks (or Long Animation Frames), and Total Blocking Time.

**Next: [Experiment: what about non-visual updates?](https://github.com/verlok/inp-workshop/blob/main/guide/09-non-visual-updates.md)**
