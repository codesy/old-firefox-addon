var codesyDomain = self.options.codesyDomain,
    codesyImgUrl = self.options.codesyImgUrl;

// Call to get the CSRF token - we'll need it for POSTing
$.ajax({
  url: "https://" + codesyDomain + "/api/v1/csrf_token.json"
}).done(function(data) {
  console.log("$.ajax successful.");
  console.log(data);

  appendForm(codesyImgUrl, codesyDomain, data.csrf_token);
}).fail(function(data) {
  console.log("$.ajax failed.");
  console.log(data);
});

var appendForm = function(codesyImgUrl, codesyDomain, csrfToken) {
  var html = '<hr/>' +
      '<div id="codesy-widget">' +
      '<a href="http://codesy.io" target="_new"><img src="' + self.options.codesyImgUrl + '"/></a>' +
      '<form id="codesy" action="https://' + codesyDomain + '/bids" method="POST">' +
      '<input name="authenticity_token" type="hidden" value="' + csrfToken + '" />' +
      '<input type="hidden" name="bid[url]" value="' + window.location + '" />' +
      '<input type="text" placeholder="offer amount" id="bid_offer" name="bid[offer]"/><br/>' +
      '<input type="text" placeholder="ask amount" id="bid_ask" name="bid[ask]"/><br/>' +
      '<a class="button minibutton">Bid</a>' +
      '</div>';
  $(".discussion-sidebar").append(html);
  $form = $("form#codesy");
  $form.find("a.button").click(function(){
    $form.submit();
  });
  var bid = $.getJSON('//' + codesyDomain + '/api/v1/bids.json?url=' + window.location);
};
