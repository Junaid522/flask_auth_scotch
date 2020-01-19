function Menu() {

    $(".main-menu-nav").on("click", ".menu-toggler", function() {
        
        $(this).addClass("close");
        $(".main-menu-div").addClass("mobiel-menu"); /*.css({ "left": "0" });*/
        $(".body-overlay").css({ "display": "block", "z-index": "1" });
    });
    $(".main-menu-nav").on("click", ".body-overlay, .close-icon, .menu-toggler.close", function() {
        
        $(".menu-toggler").removeClass("close");
        $(".main-menu-div").removeClass("mobiel-menu");
        $(".body-overlay").css({ "display": "none", "z-index": "-1" });
    });

    /* adding span with arrow and .has-sub class */
    var menuID = $(".main-menu-nav");
    var downArrows = "<span class='down-arrow'></span>";
    var catchSubs = menuID.find('li ul');
    //$(".main-menu-nav li").has("ul").addClass('has-sub');
    catchSubs.parent().addClass('has-sub');
    catchSubs.parent().append(downArrows);

    /* submenu accordian */
    menuID.find('.down-arrow').on('click', function() {
        if ($(this).siblings('ul').hasClass('open')) {
            $(this).siblings('ul').slideUp(500, function() {
                jQuery(this).removeClass("open");
            });
            $(this).removeClass('submenu-opened');
        } else {
           
            $(this).siblings('ul').slideDown(500, function() {
                jQuery(this).addClass("open");
            });;
            $(this).addClass('submenu-opened');
        }
    });
    $(".main-menu-nav ul").unbind('mouseenter mouseleave');

    resizeFix = function() {
        var mediasize = 300;
        if ($(window).width() > mediasize) { 
            menuID.on("mouseenter", ".has-sub", function() {
              
                $(this).addClass("hovered");
            }).on("mouseleave", ".has-sub", function() {
                $(this).removeClass("hovered");
            })
        }
        if ($(window).width() <= mediasize) {
            $(".main-menu-nav").on("mouseenter", ".has-sub", function() {
                $(".has-sub").removeClass("hovered");

            }).on("mouseleave", ".has-sub", function() {
                $(this).removeClass("hovered");
            })
        }
    };
    resizeFix();
    return $(window).on('resize', resizeFix);
}
 
//sticky header
var header = jQuery(".top-bar");
var hheight = header.outerHeight();
jQuery(window).scroll(function() {
    var scroll = jQuery(window).scrollTop();
    var device = jQuery(window).width();
    console.log(hheight);
    var coverUp = jQuery(".instantContact");
    if (scroll > 200) {
        header.removeClass('positioning').addClass("fixedUp");

    } else {
        header.removeClass("fixedUp").addClass('positioning');

    }
    if (scroll > 300) {
        if (device > 300) {
        header.removeClass('clearHeader').addClass("darkHeader");
        coverUp.removeClass('noCoverUp').addClass("coverUp").css({ "margin-top": hheight + "px" });
        coverUp.css({ "margin-top": hheight + "px" });
        }
        
    } else {
        header.removeClass("darkHeader").addClass('clearHeader');
        coverUp.removeClass('coverUp').addClass("noCoverUp").css({ "margin-top": 0 });
        if (device > 300) {
            coverUp.css({ "margin-top": 0 });
        }

    }
    if (scroll > 950) {
        header.removeClass('oldColor').addClass("diffColor");
    } else {
        header.removeClass("diffColor").addClass('oldColor');
    }

    var resizeFixed = function() {
        var mediasize = 300;
        if ($(window).width() > mediasize) {
            header.removeClass("yes-mobile");
            header.addClass("not-mobile");
            coverUp.removeClass("yes-mobile");
            coverUp.addClass("not-mobile");
        }
        if ($(window).width() <= mediasize) {
            header.removeClass("not-mobile")
            header.addClass("yes-mobile");
            coverUp.removeClass("not-mobile");
            coverUp.addClass("yes-mobile").css({ "margin-top": 0 });
        }
    };
    resizeFixed();
    return $(window).on('resize', resizeFixed);

});
// =============
// =============



 jQuery(document).ready(function() {
    Menu();
     // dropdown();
    
   });