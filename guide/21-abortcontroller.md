# Strategy 2: now with `AbortContoller()`

That worked... but it scheduled more work with each new interaction.

With Option 1: `debounce()`, we cancelled the previous timeout with each new interaction. Can we do something similar here?

One easy way is to use an `AbortController()`:

<details>
<summary>Answer</summary>

```js
import { schedulerDotYield } from "./workshop/utils/schedulerDotYield.js";

async function blockInPiecesYieldyAborty(ms, signal) {
  const parts = ms / 10;
  for (let i = 0; i < parts; i++) {
    if (signal.aborted) return;
    
    // Polyfill for scheduler.yield()
    await schedulerDotYield(); 

    blockFor(10);
  }
}

let abortController = new AbortController();

button.addEventListener("click", async () => {
  score.incrementAndUpdateUI();

  abortController.abort();
  abortController = new AbortController();

  await blockInPiecesYieldyAborty(1000, abortController.signal);
});
```
</details>

* Caution: Yielding is good for responsiveness, because it allows scheduling Initial feedback and allows rendering... but doing it too much can affect overall CPU thoughput. You don't want to yield between every since line of code!
