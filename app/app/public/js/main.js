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