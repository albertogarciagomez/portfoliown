jQuery(window).scroll(function(){
    var fromTopPx = 100; // distance to trigger
    var scrolledFromtop = jQuery(window).scrollTop();
    if(scrolledFromtop > fromTopPx){
        jQuery('html').addClass('scrolled');
    }else{
        console.log("preuba")
        jQuery('html').removeClass('scrolled');
    }
});