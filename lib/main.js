var pageMod = require("sdk/page-mod");
var data = require("sdk/self").data;

pageMod.PageMod({
  include: "https://github.com/*",
  contentScriptWhen: "ready",
  contentScriptFile: [data.url("jquery-2.0.3.min.js"), data.url("github.js")],
  contentScriptOptions: { codesyImgUrl: data.url("img/codesy-100x27.png") }
});
