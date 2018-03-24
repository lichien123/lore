
$(document).ready(function() {

  console.log("Hunter Page Loaded.");

  var queryURL = "/api/tracks";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(Track) {
      console.log(Track);
      console.log(Track[1]);
      console.log(Track[1].track_description);
      console.log(Track[1].track_name);

      $("#track-name").html(Track[1].track_name);
      $("#track-desc").html(Track[1].track_description);
      $("#stretch-vid").html(Track[1].stretch_vid);
      $("#cardio-vid").html(Track[1].cardio_vid);
      $("#workout-vid").html(Track[1].workout_vid);

    })

});
