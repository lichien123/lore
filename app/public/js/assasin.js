
$(document).ready(function() {

  console.log("Assasin Page Loaded.");

  var queryURL = "/api/tracks";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(Track) {
      console.log(Track);
      console.log(Track[0]);
      console.log(Track[0].track_description);
      console.log(Track[0].track_name);

      $("#track-name").html(Track[0].track_name);
      $("#track-desc").html(Track[0].track_description);
      $("#stretch-vid").html(Track[0].stretch_vid);
      $("#cardio-vid").html(Track[0].cardio_vid);
      $("#workout-vid").html(Track[0].workout_vid);

    })

});
