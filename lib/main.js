exports.main = function (options, callbacks) {

  var pageMod = require("sdk/page-mod");
  var data = require("sdk/self").data;
  var prefs = require('sdk/simple-prefs').prefs;

  pageMod.PageMod({
    include: "*",
    contentStyleFile: data.url("codesy.css"),
    contentScriptWhen: "ready",
    contentScriptFile: [data.url("jquery-2.0.3.min.js"), data.url("codesy.js"), data.url("launch.js")],
    contentScriptOptions: {
      codesyImgUrl: data.url("img/codesy-100x27.png"),
      codesyDomain: prefs.domain
    }
  });
};
