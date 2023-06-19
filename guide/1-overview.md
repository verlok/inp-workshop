# Overview of the app

At the top of the page is a simple "Score" counter and "Increment" button. A classic demo of reactivity and responsiveness!

Below are 4 metrics:

* INP: the current INP score, which is ~worst Interaction
* Interaction: the score of the most recent Interaction
* FPS: the main thread frames-per-second of the page
* Timer: a running timer animation to help visualize jank.

The FPS and Timer are not at all necessary for measuring Interactions. They are added just to make visualizing responsiveness a little easier.

## Try it out

Try to interact with the `Increment` button and watch the score increase.

INP measures how long it takes&mdash;from the moment the user interacts, until the page actually shows the rendered update to the user.

**Next: [Experiment: Long running Event Handlers](https://github.com/malchata/inp-workshop/blob/main/guide/2-long-event-handlers.md)**
