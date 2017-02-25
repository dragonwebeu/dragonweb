
$(window).on('load' ,function(e){    
    $('.modal').remove();    
    $(".content-top.animated").addClass("fadeIn");
    $(".web-design img.animated").addClass("slideInUp");    
$(".modal").on( 'mousewheel DOMMouseScroll', function ( e ) {
    console.log("1");
    e.preventDefault();
});
});

$(document).ready(function() {
    console.log(this);    
    $(".menu a").click(function() {
       ga('send', 'event', 'menu-links', 'Click', $(this).attr("href")); 
    });    
});
