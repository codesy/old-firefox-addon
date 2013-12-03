// Send a request to codesy.io with the URL
// Add a new widget under div.discussion-labels showing:
// * Whether the bug has any bids in codesy
// * An offer input, filled with user's existing bid if applicable
// * An ask input, filled with user's existing bid if applicable
var html = '<img src="' + self.options.codesyImgUrl + '"/>' +
    '<form id="codesy" action="https://' + self.options.codesyDomain + '/bids" method="POST">' +
    '<input type="text" placeholder="offer amount" id="bid_offer" name="bid[offer]"/><br/>' +
    '<input type="text" placeholder="ask amount" id="bid_ask" name="bid[ask]"/><br/>' +
    '<a class="button minibutton">Bid</a>';
$(".discussion-sidebar").append(html);
$form = $("form#codesy");
$form.find("a.button").click(function(){
  $form.submit();
});
var bid = $.getJSON('//' + self.options.codesyDomain + '/api/v1/bids.json?url=' + window.location);
