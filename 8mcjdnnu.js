function parseTime_bv(a) {
    a < 0 && (a = 0);
    var b = Math.floor(a / 60 / 60 / 24),
        c = Math.floor(a / 60 / 60),
        d = Math.floor((a - 60 * c * 60) / 60),
        e = Math.floor(a - 60 * c * 60 - 60 * d),
        f = Math.floor((a - 24 * b * 60 * 60) / 60 / 60);
    $("span.afss_day_bv").text(b), $("span.afss_hours_bv").text("0" + f), String(d).length > 1 ? $("span.afss_mins_bv").text(d) : $("span.afss_mins_bv").text("0" + d), String(e).length > 1 ? $("span.afss_secs_bv").text(e) : $("span.afss_secs_bv").text("0" + e)
}
var remain_bv = 29300;
$(document).ready(function() {
    setInterval(function() {
        remain_bv -= 1, parseTime_bv(remain_bv), remain_bv <= 0 && alert("Акция закончилась")
    }, 1e3), $(".slider").owlCarousel({
        
        
    responsive: {
            0: {
                center:false,
                items: 1,
                margin: 0,
                autoplay:false,
                responsiveClass: true,
                nav: true,
                loop:true
            },
            660: {
                responsiveClass: true,
        center: true,
        items: 3,
        nav: true,
        loop:true,
        animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed : 500
            }
        }


    })
            $("a.btn").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
  
        $(".reviews_block").owlCarousel({
            navigation: true,
            slideSpeed: 300,
            paginationSpeed: 400,
            loop: true,
            lazyLoad:false,
            nav:true,
            items: 1,
            margin: 0
        })
 


});
