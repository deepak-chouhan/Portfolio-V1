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
    $(".js-section-aboutme").waypoint(function (direction) {

        if (direction == "down") {
            $("nav").css('box-shadow', '0px 4px 20px rgba(10, 25, 47, 0.1)');
        } else {
            $("nav").css('box-shadow', 'none');
        }

    }, {
        offset: "80px;"
    })

    $(mobilenavicon).click(function () {

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


});