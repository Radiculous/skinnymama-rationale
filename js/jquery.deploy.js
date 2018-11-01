$(document).ready(function () {
    $.noConflict();
    jQuery('.bannercontainer').kenburn({
        thumbWidth: 50,
        thumbHeight: 50,
        thumbAmount: 4,
        thumbStyle: "none", // TO SHOW BULLETS "bullets", TO SHOW THUMBNAILS "both", TO HIDE "none"
        thumbVideoIcon: "on",
        thumbVertical: "bottom",
        thumbHorizontal: "center",
        thumbXOffset: 0,
        thumbYOffset: 0, // STARTS FROM THE BOTOOM
        bulletXOffset: 0,
        bulletYOffset: -16,
        hideThumbs: 'off',
        touchenabled: 'on',
        pauseOnRollOverThumbs: 'off',
        pauseOnRollOverMain: 'on',
        preloadedSlides: 2,
        timer: 7,
        debug: "off"
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //                         Google Fonts !!                       //
        // local GoogleFont JS from your server: http://www.yourdomain.com/kb-plugin/js/jquery.googlefonts.js    //
        // GoogleFonts from Original Source: http://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js or https:... //
        //      PT+Sans+Narrow:400,700                                      //
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // googleFonts: 'Oswald',
        // googleFontJS: 'kb-plugin/js/jquery.googlefonts.js'
    });
});

// Vegas Background Slideshow
$( function() {
    jQuery.vegas('slideshow',{
    backgrounds:[
        {src:'img/vegas.slideshow/rb-bg-01.jpg',  fade:4000},
        {src:'img/vegas.slideshow/rb-bg-02.jpg',  fade:4000},
        {src:'img/vegas.slideshow/rb-bg-03.jpg',  fade:4000}
    ]})
    ('overlay', { src:'img/vegas.slideshow/overlays/07.png'});
});

// Zozo Accordion

    $(document).ready(function(){
        jQuery(".accordion").zozoAccordion({
            theme: "blue",

            height: 500,
            width: 1200,

            orientation: "horizontal",
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

// Photo Swipe

    (function(window, PhotoSwipe){
      document.addEventListener('DOMContentLoaded', function(){
        var
          options = {},
          instance = PhotoSwipe.attach( window.document.querySelectorAll('#gallery a'), options );
      }, false);
    }(window, window.Code.PhotoSwipe));
