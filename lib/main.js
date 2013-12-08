exports.main = function (options, callbacks) {

  var pageMod = require("sdk/page-mod");
  var data = require("sdk/self").data;
//  var codesyDomain = require('sdk/simple-prefs').prefs.domain;
  var allPrefs = require('sdk/simple-prefs').prefs;
  var codesyDomain = allPrefs.domain;
  
  //NOVALUEs are replaced below when the ajax call is made by the contentScriptFile
  var codesyHtml = '<hr/>' +
      '<div id="codesy-widget">' +
      '<a href="http://codesy.io" target="_new"><img src="' + data.url("img/codesy-100x27.png") + '"/></a>' +
      '<form id="codesy" action="https://' + codesyDomain + '/bids" method="POST">'  +
      '<input name="authenticity_token" id="csrf-token" type="hidden" value="' + 'NOVALUE' + '" />' +
      '<input type="hidden" name="bid[url]" id="bid-url" value="' + 'NOVALUE' + '" />' +
      '<input type="text" placeholder="offer amount" id="bid_offer" name="bid[offer]"/><br/>' +
      '<input type="text" placeholder="ask amount" id="bid_ask" name="bid[ask]"/><br/>' +
      '<a class="button minibutton">Bid</a>' +
      '</div>';
  for(var propName in allPrefs) {
			if(propName.substring(0,5) == "addTo") {
				var prefVal = eval("allPrefs." + propName) ;
				if ( prefVal !== true ) continue;
//				console.log("prop " + propName + "pref val " + prefVal) ;
				var lcase;
				//assemble the full include parameter from the name of the pref
				var pieces = propName.split("_");
				var lcase = pieces[1].toLowerCase() ;
				var tld = pieces[2];
				var domain = lcase + "." + tld;
				var protocol = pieces[3] == "s" ? "https" : "http" ;
				
				//looks like we're going to have to deal with subdomains eventually .. 
				var subdomain = ""; 
				if(typeof pieces[4] !== "undefined") {
					//console.log(typeof pieces[4] + " piece 4?  ") ;
					subdomain = pieces[4] + ".";
				}
				var modIncludeStr = protocol + "://" + subdomain + domain + "/*" ;
				console.log("preference called '" + propName + "' with val " + prefVal + " triggers a pageMod ") ;
				console.log("pageMod using " + modIncludeStr + "as selector for include lcase is "+ lcase);
				var jqueryVersion = "jquery-2.0.3.min.js"; 
//				if (lcase == "winehq") jqueryVersion = "jquery.js";
				pageMod.PageMod({
					include: modIncludeStr,
					contentStyleFile: data.url(lcase + ".css"),
					contentScriptWhen: "end",
					    contentScriptFile: [data.url( jqueryVersion ), data.url(lcase+".js")],
					contentScriptOptions: {
						codesyImgUrl: data.url("img/codesy-100x27.png"),
						codesyDomain: codesyDomain,
						formHtml: codesyHtml
					}
				});
				
			}else{
//				console.log("prop " + propName + " val " + allPrefs[propName] + "evidently first 5 chars are not addTo") ;
			}
	}
};
/*
/*Deferred for another day:
WineHQ has javscript issues on their appdb pages, so our codesy injections never run
  {
    "description": "Add codesy to WineHQ?",
    "type": "bool",
    "name": "addTo_winehq_org_s_appdb",
    "value": true,
    "title": "Enable WineHQ"
  }
*/
