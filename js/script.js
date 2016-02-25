
!function ($) {}(window.jQuery)



function navbar_change() {
    $(window).bind("scroll load", function () {
         if ($(".main").position().top - $(window).scrollTop() < 50) {
            $('.navbar .nav > li > a').css('color', '#000000');
            $('.navbar-brand').css('color', '#000000');
        } else if ($(".main").position().top - $(window).scrollTop() > 50) {
            $('.navbar .nav > li > a').css('color', '#ffffff');
            $('.navbar-brand').css('color', '#ffffff');
        }
        if ($(".main").position().top - $(window).scrollTop() < 1) {
            $('.navbar-default').css('background', '#ffffff');
        } else if ($(".main").position().top - $(window).scrollTop() > 1) {
            $('.navbar-default').css('background', 'none');
        }
    });
}



