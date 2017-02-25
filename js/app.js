$(document).ready(function() {
    $(".menu a").click(function() {
       ga('send', 'event', 'menu-links', 'Click', $(this).attr("href")); 
    });
    $(window).load(function() {
        $('.uil-ring-css').remove();
    });
});

