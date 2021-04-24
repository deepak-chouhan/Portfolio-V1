$(document).ready(function () {

    var navy = "#0A192F";
    var navyl = "#112240";
    var light = "#fcfcfc";
    var grey = "#878a8f";
    var neon = "#00d1ff";
    var navytransp = "rgba(10, 25, 47, 0.90)";

    var menu_btn = document.getElementById("mobilenavicon");

    var mobilenavbar = document.getElementById("mobilenavbar");

    var menu_icon = document.getElementById("menu_icon");

    var navblur = document.getElementById("navblur");

    var desktopNav = document.getElementById("js-nav")


    mobilenavbar.style.width = "0px";
    navblur.style.opacity = "0"
    navblur.style.pointerEvents = "none"

    // Sticky navbar
    $(".js-section-intro").waypoint(function (direction) {

        if (direction == "down") {
            $("nav").css('box-shadow', '0px 4px 20px rgba(10, 25, 47, 0.2)');
        } else {
            $("nav").css('box-shadow', 'none');
        }

    }, {
        offset: "200px;"
    })

    function navfunctioning() {
        if (mobilenavbar.style.width === "0px") {
            mobilenavbar.style.width = "250px";
            menu_icon.style.fill = neon;
            navblur.style.opacity = "1"
            navblur.style.pointerEvents = "all"
        } else {
            mobilenavbar.style.width = "0px";
            menu_icon.style.fill = navyl;
            navblur.style.opacity = "0"
            navblur.style.pointerEvents = "none"
        }
    }

    $(mobilenavicon).click(function () {
        navfunctioning();
    });

    $(".work-link").click(function (e) {
        navfunctioning();
    });

    $(".contact-link").click(function (e) {
        navfunctioning();
    });

    $(mobilenavicon).hover(function () {
        // over
        menu_icon.style.fill = neon;

    }, function () {
        // out
        if (mobilenavbar.style.width !== "250px") {
            menu_icon.style.fill = navyl;
        }
    });

    // Animate on scroll

    $(".js--wp-2").waypoint(function (direction) {

        $(".js--wp-2").addClass("animate__animated animate__fadeIn");
    }, {
        offset: "80%"
    });

    $(".js--wp-3").waypoint(function (direction) {

        $(".js--wp-3").addClass("animate__animated animate__fadeIn");
    }, {
        offset: "80%"
    });

    $(".js--wp-4").waypoint(function (direction) {

        $(".js--wp-4").addClass("animate__animated animate__fadeIn");
    }, {
        offset: "80%"
    });

    $(".js--wp-5").waypoint(function (direction) {

        $(".js--wp-5").addClass("animate__animated animate__fadeIn");
    }, {
        offset: "90%"
    });

    // Nav scroll

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });




});