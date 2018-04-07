# Site Tweaks

A collection of scripts so I can avoid heavier tooling.

Chromes extension security model is... pretty crazy. An extension doing anything
interesting needs to "Read and modify your data" on all sites. Toss in things like
[Chrome extensions being maliciously hijacked](https://thehackernews.com/2017/08/chrome-extension-hacking.html),
and minimizing the number installed seems prudent.

As it turns out, it only takes a tiny bit of scaffolding to wrap up scripts that
I would otherwise use something like
(tampermonkey)[http://tampermonkey.net/] anyway, so
there's really no inconvenience.

### Resources
* https://robots.thoughtbot.com/how-to-make-a-chrome-extension
* https://developer.chrome.com/extensions/overview
