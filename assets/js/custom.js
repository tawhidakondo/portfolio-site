$(document).ready(function () {
    "use strict";
    /*==============================================
        * Author        : "Hello Academy"
        * Template Name : Artistica | HTML Template
        * Version       : 1.0
    ================================================= */

    /*=========== TABLE OF CONTENTS ===========

    	1. Reveloution Slider
    	2. Masonry js
    	3. Blog js
    	4. Parallaxie js
    	5. Reply-button js
    	6. Scroll Top
    	7. LoadMore js
    	8. Scrollup js
        9. Progress Js
    	10. Navbar Background Change
    	11. Map Js
        12. Preloader Js

    ===========================================*/
    /*--------------------------------
	 	1. Reveloution Slider
	----------------------------------*/
    var tpj = jQuery;
    var revapi1078;
    if (tpj("#artistika_home_page").revolution == undefined) {
        revslider_showDoubleJqueryError("#artistika_home_page");
    } else {
        revapi1078 = tpj("#artistika_home_page").show().revolution({
            sliderType: "standard",
            jsFileLocation: "revolution/js/",
            sliderLayout: "auto",
            dottedOverlay: "none",
            delay: 9000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                mouseScrollReverse: "default",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },


            },
            viewPort: {
                enable: true,
                outof: "pause",
                visible_area: "80%",
                presize: false
            },
            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [1240, 1024, 778, 480],
            gridheight: [840, 600, 500, 400],
            lazyType: "none",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 2000,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 46, 47, 48, 49, 50, 55],
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });
    }


    /*--------------------------------
	 	2. Masonry Js
	----------------------------------*/
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-sizer'
        }
    })
    $('.filter-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

/*--------------------------------
	 	9. Progress Js
	----------------------------------*/
$('.circleGraphic1').circleGraphic({
    'color': '#fff'
});
$('.circleGraphic2').circleGraphic({
    'color': '#fff'
});
$('.circleGraphic3').circleGraphic({
    'color': '#fff'
});

$('.circleGraphic4').circleGraphic({
    'color': '#fff'
});


    /*--------------------------------
	 	3. Blog Js
	----------------------------------*/
    $('.blog-content').isotope({
        itemSelector: '.blog-single',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.blog-sizer'
        }
    })

    /*--------------------------------
	 	4. Parallaxie Js
	----------------------------------*/
    $('.parallaxie').parallaxie();

    /*--------------------------------
	 	5. Reply Button Js
	----------------------------------*/
    $(".reply-button1").click(function () {
        $(".post-media-1").slideToggle(700);
    });

    $(".reply-button2").click(function () {
        $(".post-media-2").slideToggle(700);
    });

    $(".reply-button3").click(function () {
        $(".post-media-3").slideToggle(700);
    });

    $(".reply-button4").click(function () {
        $(".post-media-4").slideToggle(700);
    });

    $(".reply-button5").click(function () {
        $(".post-media-5").slideToggle(700);
    });



    /*--------------------------------
	 	6. Load More
	----------------------------------*/
    $(".media-hidden").slice(0, 3).show();

    $("#MediaLoadMore").on('click', function (e) {
        e.preventDefault();

        $(".media-hidden:hidden").slice(0, 1).slideDown(1000);
        if ($(".media-hidden:hidden").length == 0) {
            $("#MediaLoadMore").fadeOut('slow');
        }

        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });

    // Scrollup js
    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    /*--------------------------------
	7. Scrolling Nav
    ----------------------------------*/
    function scrollToSection(event) {
        event.preventDefault();
        var $section = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: $section.offset().top
        }, 500);
    }
    $('[data-scroll]').on('click', scrollToSection);


});


/*--------------------------------
	 	8. Scroll Top
	----------------------------------*/
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
});

/*--------------------------------
 	10. Navbar Background Change
----------------------------------*/
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll > 850) {
        $(".navbar").css({
            "background": "rgba(255,212,85, .8)",
            "transition": ".7s"
        });
    } else {
        $(".navbar").css("background", "transparent");
    }

    if (scroll > 480) {
        $(".navbar-blog").css({
            "background": "rgba(255,212,85, .8)",
            "transition": ".7s"
        });
    } else {
        $(".navbar-blog").css("background", "transparent");
    }

});

/*--------------------------------
 	11. Map Js
----------------------------------*/
$(".your_map").each(function () {
      var element = $(this).attr("id");
      map = new GMaps({
        el: "#" + element,
        center: new google.maps.LatLng(26.6665317, -81.9084063),
        zoom: 16,
        scrollwheel: false
      });
    });

/*--------------------------------
	 	12. Preloader Js
	----------------------------------*/

    $('body').moombaPreloader({
        type: 2, // Rectangle(1), Square(2)
        bg_color: 'rgb(225,225,225)', // Background Color
        // Rectangle(1)
        r_box_color: 'rgb(254,254,254)', // Outer shell
        r_bar_color: 'rgb(204,102,51)', // Inner Bar
        // Square(2)
        s_box_color: 'rgb(254,254,254)', // Outer shell
        s_square_1: 'red', // Top Left
        s_square_2: 'green', // Top Right
        s_square_3: 'rgb(191,168,118)', // Bottom Left
        s_square_4: 'rgb(89,51,37)', // Bottom Right
    });



