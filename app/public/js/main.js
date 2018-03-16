$( document ).ready(function() {
    console.log( "ready!" );
    $("#modal").iziModal({
    	closeOnEscape: true
    });

 $(document).on('click', '.trigger', function (event) {
    event.preventDefault();
    // $('#modal').iziModal('setZindex', 99999);
    // $('#modal').iziModal('open', { zindex: 99999 });
    $('#modal').iziModal('open');
});



});