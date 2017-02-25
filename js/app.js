
$(window).on('load' ,function(){
    console.log(this);
    $('.modal').remove();    
    console.log("1");
    $(".content-top.animated").addClass("fadeIn");
    $(".web-design img").addClass("slideInUp");
    console.log("2");
});

$(document).ready(function() {
    $(".menu a").click(function() {
       ga('send', 'event', 'menu-links', 'Click', $(this).attr("href")); 
    });    
});
