// Send a request to codesy.io with the URL
// Add a new widget under div.discussion-labels showing:
// * Whether the bug has any bids in codesy
// * An offer input, filled with user's existing bid if applicable
// * An ask input, filled with user's existing bid if applicable
$(".discussion-sidebar").append('<img src="' + self.options.codesyImgUrl + '"/><form><input type="text" placeholder="5.00" id="offer"/><br/><input type="text" placeholder="500.00" id="ask"/><br/><input type="submit"/>');

$.getJSON('http://' + self.options.codesyDomain + '/bids?url=' + window.location);
