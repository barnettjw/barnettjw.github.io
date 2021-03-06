$(document).ready(function() {
    // get favorites array from local storage
    //check if currentPage is in favorites, if so toggle class
    if ( localStorage.getItem('favorites') ) {
        var favorites = JSON.parse(localStorage.getItem('favorites'));
        jQuery.each( $( ".icon-heart" ), function( i, val ) {

            var currentItem = $(val).parent().attr("data-id");
            var index = jQuery.inArray(currentItem, favorites );
            if ( index >= 0 ) { $(val).toggleClass( "selected" ); }
        });
    }
    else { var favorites = []; }

    $( ".icon-heart" ).click(function() {
        $( this ).toggleClass( "selected" );
        var selected = $(this).parent().attr("data-id");

        var index = jQuery.inArray( selected, favorites );
        if ( index >= 0 ) { favorites.splice(index, 1); }
        else { favorites.push(selected); }
        localStorage.setItem("favorites", JSON.stringify(favorites));
    });

    console.log(favorites);
});
