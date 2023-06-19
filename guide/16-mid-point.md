# Mid-point summary

We are about to move into more complicated topics, but the most important lessons you just learned:

* INP measures all Interactions
* Each Interaction is measured from Input to Next Paint&mdash;the way the user *sees* responsiveness.
* Input Delay, (Event) Processing Times, and then Presentation Delay's, all affect Interaction responsiveness.
* You can measure INP, and Interaction breakdowns, easily!

Lessons:

* Don't have long running code (long tasks) on your pages
* Move needless code out of event handlers until after next paint
* Make sure the Rendering update itself is efficient for browser

**Next: [Multiple interactions (and rage clicks)](https://github.com/malchata/inp-workshop/guides/17-multiple-interactions.md)**
