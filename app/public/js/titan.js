
$(document).ready(function() {

  console.log("Titan Page Loaded.");

  var queryURL = "/api/userinfo";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(UserInfo) {
      console.log(UserInfo);
      console.log(UserInfo[2]);
      console.log(UserInfo[2].track_description);
      console.log(UserInfo[2].track_name);

      $("#track-name").html(UserInfo[2].track_name);
      $("#track-desc").html(UserInfo[2].track_description);
      $("#stretch-vid").html(UserInfo[2].stretch_vid);
      $("#cardio-vid").html(UserInfo[2].cardio_vid);
      $("#workout-vid").html(UserInfo[2].workout_vid);

    })

});
