$(document).ready(function() {
    $('#toggle').click(function(e) {
        e.stopPropagation();
        if ($(this).hasClass("active")) {
            $("#toggle-nav").removeClass('navShadow');
            $(this).removeClass('active');
            $('body').removeClass('navOpen');
        } else {
            $("#toggle-nav").addClass('navShadow');
            $(this).addClass('active');
            $('body').addClass('navOpen');
        }
    });
});


$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    //>=, not <=
    if (scroll >= 500) {
        //clearHeader, not clearheader - caps H
        $("header").addClass("fixedheader");
    } else {
        $("header").removeClass("fixedheader");
    }
}); //missing );