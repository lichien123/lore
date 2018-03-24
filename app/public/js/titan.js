
$(document).ready(function() {

  console.log("Titan Page Loaded.");

  var queryURL = "/api/tracks";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(Track) {
      console.log(Track);
      console.log(Track[2]);
      console.log(Track[2].track_description);
      console.log(Track[2].track_name);

      $("#track-name").html(Track[2].track_name);
      $("#track-desc").html(Track[2].track_description);
      $("#stretch-vid").html(Track[2].stretch_vid);
      $("#cardio-vid").html(Track[2].cardio_vid);
      $("#workout-vid").html(Track[2].workout_vid);

    })

});
