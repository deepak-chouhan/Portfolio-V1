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

    mobilenavbar.style.width = "0px";
    navblur.style.opacity = "0"
    navblur.style.pointerEvents = "none"



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

});