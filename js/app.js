
$(document).ready(function() {
    $(".menu a").click(function() {
       ga('send', 'event', 'menu-links', 'Click', $(this).attr("href")); 
    });
    $('img').on('load', "done" ,function(){
        $('.uil-ring-css').remove();
    });
});
