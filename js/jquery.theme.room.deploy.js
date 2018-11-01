// Vegas Background Slideshow

    $.vegas('slideshow',{
    backgrounds:[
        {src:'img/rooms/thm-rm-bg-01.jpg',  fade:3000},
        {src:'img/rooms/thm-rm-bg-02.jpg',  fade:3000},
        {src:'img/rooms/thm-rm-bg-03.jpg',  fade:3000},
        {src:'img/rooms/thm-rm-bg-03.jpg',  fade:3000}
    ]});

// Zozo Accordion

    $(document).ready(function(){
        jQuery(".accordion").zozoAccordion({
            theme: "black",

            height: 400,
            width: 1200,

            orientation: " ",
            scrollable: true,

            contentWidth: 1000,

            responsiveDelay: 0,
            responsive: true,

            sectionSpacing: 0,
            headerSize: 40,
            animation:{
                duration: 5000,
                easing: "fade",
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
