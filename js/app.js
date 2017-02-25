
$(window).on('load' ,function(e){    
    $('.modal').remove();    
    $(".content-top.animated").addClass("fadeIn");
    $(".web-design img.animated").addClass("slideInUp");    
});

$(document).ready(function() {
    console.log(this);
    $(this).on("scroll", function(e){
        console.log(this);
        e.preventDefault();
    });
    $(".menu a").click(function() {
       ga('send', 'event', 'menu-links', 'Click', $(this).attr("href")); 
    });    
});
