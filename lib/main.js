exports.main = function (options, callbacks) {

  var pageMod = require("sdk/page-mod");
  var data = require("sdk/self").data;
  var codesyDomain = options.staticArgs.domain ? options.staticArgs.domain : 'codesy.io';

  pageMod.PageMod({
    include: "https://github.com/*",
    contentStyleFile: data.url("github.css"),
    contentScriptWhen: "ready",
    contentScriptFile: [data.url("jquery-2.0.3.min.js"), data.url("github.js")],
    contentScriptOptions: {
      codesyImgUrl: data.url("img/codesy-100x27.png"),
      codesyDomain: codesyDomain
    }
  });

};
