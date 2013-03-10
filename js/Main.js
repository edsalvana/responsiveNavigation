var img;
var heroHeight;
var audienceNav;

$(document).ready(function() {

    //get a reference to the image inside the hero and the height of the hero
    img        = $("#hero");
    heroHeight = 530; //parseInt( $("#content").css("margin-top") );

    audienceNav = $("#audienceNavigation"); 

    $(window).scroll( onScroll );

});

function onScroll( e ){
    //calculate the target opacity
    var targetOpacity = Math.max( ( heroHeight - $(window).scrollTop() ) / heroHeight, 0 );
    img.css("opacity", targetOpacity );

    var y = $(window).scrollTop();

    if(y < 530 ){
    	//$(audienceNav).css("position", "fixed" );
    	$(audienceNav).css("top", 0);
    } else {
    	$(audienceNav).css("top", 530-y);
		//$(audienceNav).css("position", "relative" );
    }
}