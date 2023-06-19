# Multiple interactions (and rage clicks)

Moving long blocking work around can help&mdash;but it still blocks the page&mdash;affecting future interactions as well as many other page updates, such as (certain) animations.

Ideally, we want to remove Long Tasks completely!

Strategies:

* Remove unnecessary code altogether (especially scripts)
* Optimize code to not be needlessly long-running
* Abort stale work when a new interactions arrive.

**Next: [Strategy 1: debounce](https://github.com/malchata/inp-workshop/blob/main/guide/18-debounce.md)**
