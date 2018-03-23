
$(document).ready(function() {
  console.log("easy win");

  $("#track-name").on("click", function(event) {
    var queryURL = "/api/tracks";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(Track) {
      console.log(Track);
      console.log(Track[0]);
      console.log(Track[0].track_description);
    })
  });
});
