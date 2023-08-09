# Conclusion

Breaking up *all* long tasks, allows a site to be responsive to new Interactions. That lets you provide initial feedback quickly, and also lets you make decisions such as aborting in-progress work.

Sometimes that means scheduling entry points as separate Tasks.
Sometimes that means adding "yield" points where convenient.

And, review from earlier lessons:

* Don't have long-running code (long tasks) on your pages
* Move needless code out of event handlers until after the next paint
* Make sure the Rendering update itself is efficient for the browser
