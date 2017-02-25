
$(window).on('load' ,function(e){    
    $('.modal').remove();    
    $(".content-top.animated").addClass("fadeIn");
    $(".web-design img.animated").addClass("slideInUp");        
});

$(document).ready(function() {
    $(".modal").on('mousewheel DOMMouseScroll', function(e) {
        stop && e.preventDefault();
    });
    console.log(this);    
    $(".menu a").click(function() {
       ga('send', 'event', 'menu-links', 'Click', $(this).attr("href")); 
    });    
});
