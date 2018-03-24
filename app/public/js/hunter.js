
$(document).ready(function() {

  console.log("Hunter Page Loaded.");

  var queryURL = "/api/userInfo";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(UserInfo) {
      console.log(UserInfo);
      console.log(UserInfo[1]);
      console.log(UserInfo[1].track_description);
      console.log(UserInfo[1].track_name);

      $("#track-name").html(UserInfo[1].track_name);
      $("#track-desc").html(UserInfo[1].track_description);
      $("#stretch-vid").html(UserInfo[1].stretch_vid);
      $("#cardio-vid").html(UserInfo[1].cardio_vid);
      $("#workout-vid").html(UserInfo[1].workout_vid);

    })

});
