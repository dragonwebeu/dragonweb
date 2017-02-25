
$(document).ready(function() {
    $(".menu a").click(function() {
       ga('send', 'event', 'menu-links', 'Click', $(this).attr("href")); 
    });
    $('img').on('load', "ready" ,function(){
        console.log(this);
        $('.uil-ring-css').remove();
    });
});
