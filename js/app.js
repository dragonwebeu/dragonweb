
$(window).on('load' ,function(){
    console.log(this);
    $('.modal').fadeOut();    
});

$(document).ready(function() {
    $(".menu a").click(function() {
       ga('send', 'event', 'menu-links', 'Click', $(this).attr("href")); 
    });    
});
