$(document).ready(function () {
    $.noConflict();
    jQuery('.bannercontainer').kenburn({
        thumbWidth: 80,
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

// Photo Swipe

    (function(window, PhotoSwipe){
      document.addEventListener('DOMContentLoaded', function(){
        var
          options = {},
          instance = PhotoSwipe.attach( window.document.querySelectorAll('#gallery a'), options );
      }, false);
    }(window, window.Code.PhotoSwipe));
