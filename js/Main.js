var img;
var heroHeight;

$(document).ready(function() {

    //get a reference to the image inside the hero and the height of the hero
    img        = $("#wat");
    heroHeight = parseInt( $("#content").css("margin-top") );
    //$(window).scroll( onScroll );

});

function onScroll( e ){
    //calculate the target opacity
    var targetOpacity = Math.max( ( heroHeight - $(window).scrollTop() ) / heroHeight, 0 );
    img.css("opacity", targetOpacity );
}