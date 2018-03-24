
$(document).ready(function() {

  console.log("Assasin Page Loaded.");

  var queryURL = "/api/userinfo";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(UserInfo) {
      console.log(UserInfo);
      console.log(UserInfo[0]);
      console.log(UserInfo[0].track_description);
      console.log(UserInfo[0].track_name);

      $("#track-name").html(UserInfo[0].track_name);
      $("#track-desc").html(UserInfo[0].track_description);
      $("#stretch-vid").html(UserInfo[0].stretch_vid);
      $("#cardio-vid").html(UserInfo[0].cardio_vid);
      $("#workout-vid").html(UserInfo[0].workout_vid);

    })

});
