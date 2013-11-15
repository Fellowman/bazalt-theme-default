define('views', [
    'app'
], function() {
    // must be for future replace with compiled templates
});

$(document).ready(function() {
    setTimeout("light()",100);
});

function light(){
    var blicks = $("#light");
    blicks.each(function(n, blick) {
        var s=$('.container').width()-295; console.info (s);
        blick = $(blick);
        var direction = blick.hasClass('left') ? "-="+s+"px" : "+="+s+"px";
        blick.stop().animate({left: direction}, {
            duration: 2000,
            easing: 'swing',
            complete: function() {
                blick.toggleClass('left').toggleClass('right');
            }
        });
    });
    setTimeout("light()",2500);
}

