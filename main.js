$(document).ready(function() {
  $(".slide").each(function() {
    $(this).css("background-image", "url("+$(this).data("bg")+")");
  });
  
  var current = 0;
  var count = 2;
   $(document).on("click", ".next", function(e) {
    $(".slide:eq("+current+")").css("z-index", "0").animate({
      top: "-1%",
      height:"0%",
 
    }, 1000, function() {
      $(this).css("top", "100%");
    });
    current++;
    if (current > count) {
      current = 0;
    }
    $(".slide:eq("+current+")").css("z-index", "1").animate({
      top: "0%",
      height: "100%",
   
    }, 600);
    e.preventDefault();
  });
});


//Fill viewport function
$(function() {

    var pause = 100; // will only process code within delay(function() { ... }) every 100ms.

    $(window).resize(function() {
        
        delay(function() {
        
            var width = $(window).width();
    
            if( width > 776  ) {
               $(".js-height").height($(window).height());
               	$(window).resize(function(){
               	    $(".js-height").height($(window).height());
               	});
            } else if( width >= 480 && width <= 767 ) {
                // code for mobile landscape
            } else if( width <= 479 ) {
                // code for mobile portrait
            }
        
        }, pause );
    
    });
    
    $(window).resize();

});

var delay = (function(){
    var timer = 0;
    return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();