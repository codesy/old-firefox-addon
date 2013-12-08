//the codesy form will be appended to a div with this class:
var targetClass = "awesome" ;

//typically no need to edit code below here, unless this site has special needs
var codesyDomain = self.options.codesyDomain,
    codesyImgUrl = self.options.codesyImgUrl,
    formHtml = self.options.formHtml;
    
// Call to get the CSRF token - we'll need it for POSTing
$.ajax({
  url: "https://" + codesyDomain + "/api/v1/csrf_token.json"
}).done(function(data) {
    console.log("$.ajax successful.");
    console.log(data);
	$("." + targetClass).append(formHtml);
	$form = $("form#codesy");
	$("#csrf-token").val(data.csrf_token) ;
	$("#bid-url").val(window.location) ;

	$form.find("a.button").click(function(){
		$form.submit();
	});
	var bid = $.getJSON('//' + codesyDomain + '/api/v1/bids.json?url=' + window.location);

}).fail(function(data) {
  console.log("$.ajax failed.");
  console.log(data);
});
