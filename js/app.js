
$(window).on('load' ,function(){
    console.log(this);
    $('.modal').remove();    
    $(".content-top.animated").delay(800).addClass("fadeIn");
});

$(document).ready(function() {
    $(".menu a").click(function() {
       ga('send', 'event', 'menu-links', 'Click', $(this).attr("href")); 
    });    
});
