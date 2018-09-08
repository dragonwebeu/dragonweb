$(window).on('load' ,function(e){    
    $('.modal').remove();           
    $(".content-top.animated").addClass("fadeIn");
    $(".web-design img.animated").addClass("slideInUp");        
});

$(document).ready(function() {         
    $(".modal, .outer-menu .checkbox-toggle ~ .menu").on("mousewheel DOMMouseScroll", function(e) {                                
        stop && e.preventDefault();
    });    
    $(".menu a").click(function() {
       ga('send', 'event', 'menu-links', 'Click', $(this).attr("href")); 
    });        
    $("img, .bg-img, .gallery-macro").on("contextmenu", function(e){
       e.preventDefault();
       alert("All pictures are copyrighted. Do not use without written permission.");
    }); 
});