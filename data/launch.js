// We evaluate every new url/page

// Look for a widget to add to this page
codesy.match(window.location)

//After a successful match, receive the mission to add the widget to this page    
  .done(function(mission){    

    codesy.api.csrf_token()
      .done(function(data) {
        console.log("$.ajax successful.");
        var codesyToken = data.csrf_token;
        console.log(data);
        if($(mission.target.selector).length >0 ){

          console.log("getting codesyImgUrl");
          var codesyImgUrl = self.options.codesyImgUrl;
          console.log("codesyImgUrl: "+codesyImgUrl);
          codesy.options.domain = self.options.codesyDomain;
          console.log("domain: "+codesy.options.domain);

          mission.before_append && mission.before_append (self.options);
          

          codesy.appendForm(mission, codesyImgUrl, codesyToken)
            .done(function(){
              //TODO : update the widget with any bid information                 
              var bid = codesy.api.bids({url:window.location.toString()});

              mission.after_append && mission.after_append (self.options);
            })
            .fail(function(){
              console.error("appendForm failed!");
              console.exception();
            });
        }
      })
      .fail(function(data) {
        console.log("$.ajax failed.");
        console.log(data);
      });

  })
  .fail(function(){
    console.log("codesy.match failed.");
  });
