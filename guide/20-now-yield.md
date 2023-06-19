# Strategy 2: now with `yield()`

However, we can leverage modern JS access to `async` and `await` in order to easily add "yield points" to any JS function.

For example:

<details>
<summary>Answer</summary>

```js
import { schedulerDotYield } from "./workshop/utils/schedulerDotYield.js";

async function blockInPiecesYieldy(ms) {
  const ms_per_part = 10;
  const parts = ms / ms_per_part;
  for (let i = 0; i < parts; i++) {
    // Polyfill for scheduler.yield()
    await schedulerDotYield(); 

    blockFor(ms_per_part);
  }
}

button.addEventListener("click", async () => {
  score.incrementAndUpdateUI();
  await blockInPiecesYieldy(1000);
});
```
</details>

**Next: [Strategy 2: now with `AbortContoller()`](https://github.com/malchata/inp-workshop/guides/21-abortcontroller.md)**
