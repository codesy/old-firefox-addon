codesy.io Firefox Extension
===========================

The codesy.io Firefox Extension adds codesy.io information to open-source bugs
you visit.

Getting Started with Development
--------------------------------

1. Clone this repo
2. [Install the Firefox Add-on SDK](https://addons.mozilla.org/developers/docs/sdk/latest/dev-guide/tutorials/installation.html) to get the SDK Virtual Environment
3. Fiddle with the code
4. Run `cfx run` to run an instance of Firefox with your code changes

Developing with patronage
-------------------------

If you are running a local [patronage](https://github.com/codesy/patronage)
instance, you can direct the add-on to use a local domain like so:
```
cfx run --static-args='{"domain": "localhost"}'
```
