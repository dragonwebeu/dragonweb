
$(window).on('load' ,function(e){    
    $('.modal').remove();    
    $(".content-top.animated").addClass("fadeIn");
    $(".web-design img.animated").addClass("slideInUp");    
$(".modal").on( 'mousewheel DOMMouseScroll', function ( e ) {
    var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;

    this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
    e.preventDefault();
});
});

$(document).ready(function() {
    console.log(this);    
    $(".menu a").click(function() {
       ga('send', 'event', 'menu-links', 'Click', $(this).attr("href")); 
    });    
});
