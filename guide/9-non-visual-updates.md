# Experiment: what about non-visual updates?

Try to add a `console.log` to your event handler.

When does it show in console? Is it delayed just like Next Paint? Does it matter if it is called before or after the call to `blockFor`?

<details>
<summary>Answer</summary>

```js
button.addEventListener("click", () => {
  score.incrementAndUpdateUI();
  console.log("Hello!");
  blockFor(1000);
});
```
</details>

INP measures delays in visual updates (paint) after interactions... but not everything is visual.

Console logs, network requests, local storage… these don't have to wait for browser rendering, and INP does not measure them&mdash;unless they *also* affect next paint.

(Actually, even DOM, style, layout, etc changes are observable right away, through JavaScript, just the pixel representation is delayed)

The web has a simple, but unique system for task scheduling and rendering.

![Interaction diagram](https://web-dev.imgix.net/image/jL3OLOhcWUQDnR4XjewLBx4e3PC3/Ng0j5yaGYZX9Bm3VQ70c.svg)

* [web.dev/inp](https://web.dev/inp)
* [web.dev/optimize-inp](https://web.dev/optimize-inp)

**Next: [Discuss: presentation delays](https://github.com/malchata/inp-workshop/blob/main/guide/10-presentation-delays.md)**
