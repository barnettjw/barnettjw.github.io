fa//maximize table on double click
$( "th" ).dblclick(function() {
    $("table").toggleClass("nowrap");
    var usedWidth = parseInt($('table').css('width')) / parseInt($('#main').css('max-width'));
    if(usedWidth > .9){
        $("table").toggleClass("absolute");
    }
});

//on mobile, res-ort table right-to-left so description comes before command
//source: https://codepen.io/ravenous/pen/BgGKA
(function($) {
	function mediaSize() {
		if (window.matchMedia('(max-width: 640px)').matches) {
            $("td, th").each(function() {
              $(this).parent().prepend(this);
            });
		}
	};

  mediaSize();
  window.addEventListener('resize', mediaSize, false);
})(jQuery);
