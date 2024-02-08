# Discuss: presentation delays

So far, we've looked at the performance of JavaScript, via input delay or event handlers, but what else affects rendering Next Paint?

Well, updating the page with expensive effects!

Even if the page update comes quickly, the browser may still have to work hard to render them!

* On the main thread:
  * UI frameworks that need to render updates after state changes
  * DOM changes, or toggling many expensive CSS query selectors can trigger lots of Style, Layout, and Paint.
* Off the main thread:
  * Using CSS to power GPU effects
  * Adding very large high-resolution images
  * Using SVG/Canvas to draw complex scenes

![Rendering diagram](https://wd.imgix.net/image/cGQxYFGJrUUaUZyWhyt9yo5gHhs1/yiOcXy6pCOAlx6fhBVFP.jpeg?auto=format&w=1600)

* [RenderingNG](https://developer.chrome.com/articles/renderingng/)

Some Examples, commonly found on the web

* An SPA site rebuilds the whole page DOM after a link is clicked, without pausing to provide initial visual feedback.
* A search page offers complex search filters with dynamic UI, but runs expensive handlers to do so.
* One Dark mode toggle triggers style/layout for the whole page

**Next: [Experiment: `requestAnimationFrame`](https://github.com/verlok/inp-workshop/blob/main/guide/11-raf.md)**
