
$(window).on('load' ,function(){
    console.log(this);
    $('.modal').fadeOut();    
    $(".content-top.animated").addClass("fadeIn");
});

$(document).ready(function() {
    $(".menu a").click(function() {
       ga('send', 'event', 'menu-links', 'Click', $(this).attr("href")); 
    });    
});
