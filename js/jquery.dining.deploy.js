// Vegas Background Slideshow

$( function() {
    jQuery.vegas('slideshow',{
    backgrounds:[
        {src:'img/dining/dining-01.jpg',  fade:3000},
        {src:'img/dining/dining-02.jpg',  fade:3000},
        {src:'img/dining/dining-03.jpg',  fade:3000},
        {src:'img/dining/dining-04.jpg',  fade:3000}
      ]})
    ('overlay', { src:'img/vegas.slideshow/overlays/11.png'});
});

// Zozo Accordion

    $(document).ready(function(){
        jQuery(".regular-rooms").zozoAccordion({
            theme: "blue",

            height: 500,
            width: 1200,

            orientation: "vertical",
            scrollable: true,

            contentWidth: 1000,

            responsiveDelay: 0,
            responsive: true,

            sectionSpacing: 0,
            headerSize: 48,
            animation:{
                duration: 5000,
                easing: "slide",
                type: "css"
            }

        });
    });

// Mouseover

$(document).ready(function() {
    $('.dining').mouseenter(function(e) {
        $(this).children('a').children('img').animate({ height: '200', left: '0', top: '0', width: '350'}, 100);
        $(this).children('a').children('span').fadeIn(200);
    }).mouseleave(function(e) {
        $(this).children('a').children('img').animate({ height: '200', left: '0', top: '0', width: '350'}, 100);
        $(this).children('a').children('span').fadeOut(200);
    });
});

// Photo Swipe

    (function(window, PhotoSwipe){
      document.addEventListener('DOMContentLoaded', function(){
        var
          options = {},
          instance = PhotoSwipe.attach( window.document.querySelectorAll('#gallery a'), options );
      }, false);
    }(window, window.Code.PhotoSwipe));
