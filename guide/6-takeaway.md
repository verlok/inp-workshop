# Takeaway

*Any* code running in *any* event handlers will delay the interaction.

* That includes handlers registered from different scripts...
* That includes framework or library code that runs in handlers.
  * For example: a state update that triggers a component render.
* Not only your own code, but also all third party scripts.

It's a common problem!

**Next: [Experiment: no UI update?](https://github.com/malchata/inp-workshop/blob/main/guide/7-no-ui-update.md)**
