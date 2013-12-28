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
5. Get the extension auto-installer: https://addons.mozilla.org/en-US/firefox/addon/autoinstaller/
6. In a second terminal tab, in the working copy of the addon, do this: 
while true ; do cfx xpi ; wget --post-file=codesy.xpi http://localhost:8888/ ; sleep 5 ; done
7. Now your changes will post to your running instance of cfx every five seconds.

Developing with codesy.io
-------------------------

By default, the add-on communicates with
[api.codesy.io](https://api.codesy.io). You should use the
[codesy-dev.herokuapp.com](https://codesy-dev.herokuapp.com) dev site while you
work on the add-on. Configure the add-on to use domain `codesy-dev.herokuapp.com`
in the add-on preferences.
