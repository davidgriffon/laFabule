$(function () {
    //$("header").height($(window).height());
    var feed = new Instafeed({
        get: 'user',
        userId: '5765606551',
        clientId: '854066fb52a64b2d8344f208eb760d8f',
        accessToken: '5765606551.854066f.35b6e02c2bee418db2b4ec68f06be028',
        sortBy: 'most-recent',
        limit: 12,
        resolution: 'standard_resolution',
        template: '<div class="item"><a href="{{link}}"><img src="{{image}}"/></a></div>',
        after: owl
    });
    feed.run();

    function owl() {
        var owlCarousel = $(".owl-carousel");
        owlCarousel.owlCarousel({
            loop: true,
            nav: true,
            margin: 10,
            responsive: {
                0: {
                    items: 2
                },
                500: {
                    items: 4
                },
                750: {
                    items: 5
                },
                1000: {
                    items: 6
                }
            }
        });
        owlCarousel.on('mousewheel', '.owl-stage', function (e) {
            if (e.deltaY === 0) {
                if (e.deltaX > 1) {
                    owlCarousel.trigger('next.owl');
                } else if (e.deltaX < 1) {
                    owlCarousel.trigger('prev.owl');
                }
                e.preventDefault();
            }
        });
    }
});

// CSS Trick
var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

$(function () {
    if (iOS) {
        $("#home").attr("style", "background-attachment:scroll");
        $(".avril").attr("style", "background-attachment:scroll");
    }
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

var devtools = /./;
devtools.toString = function() {
    this.opened = true;
}

console.log('%c', devtools);
