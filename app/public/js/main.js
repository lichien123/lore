$( document ).ready(function() {
    console.log( "ready!" );
    $("#modal").iziModal({
    	closeOnEscape: true
    });

 $(document).on('click', '.trigger', function (event) {
    event.preventDefault();
    $('#modal').iziModal('open');
});



});

//////Linking Track Info to Frontend//////

var trackInfo = require("../../utilities/allTrackInfo");

$(function() {

  $(".get-assassin").on("click", function(event) {
    console.log(trackInfo.assassin);
  })

});
