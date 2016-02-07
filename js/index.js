/**
 * Created by vshivakumar on 2/6/16.
 */
// If the screen size is less than 900px than reroute to mobile.html
if (screen.width <= 899) {
    document.location = "mobile.html";
}

// If the user device is an iPhone then route to mobile.html
if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
    location.replace("http://beta-eta.sigmaphidelta.org/mobile.html");
}

// Slideshows
setInterval(function() {
    $('#slideshow1 > div.imgCont:first')
        .css({'left':'0'})
        .animate({'left':'100%'})
        .next()
        .fadeIn(1)
        .end()
        .appendTo('#slideshow1');
    $('#slideshow2 > div.imgCont:first')
        .css({'left':'0'})
        .animate({'left':'100%'})
        .next()
        .fadeIn(1)
        .end()
        .appendTo('#slideshow2');
    $('#slideshow3 > div.imgCont:first')
        .css({'left':'0'})
        .animate({'left':'100%'})
        .next()
        .fadeIn(1)
        .end()
        .appendTo('#slideshow3');
    $('#slideshow4 > div.imgCont:first')
        .css({'left':'0'})
        .animate({'left':'100%'})
        .next()
        .fadeIn(1)
        .end()
        .appendTo('#slideshow4');
    $('#slideshow5 > div.imgCont:first')
        .css({'left':'0'})
        .animate({'left':'100%'})
        .next()
        .fadeIn(1)
        .end()
        .appendTo('#slideshow5');
    $('#slideshow6 > div.imgCont:first')
        .css({'left':'0'})
        .animate({'left':'100%'})
        .next()
        .fadeIn(1)
        .end()
        .appendTo('#slideshow6');
    $('#slideshow7 > div.imgCont:first')
        .css({'left':'0'})
        .animate({'left':'100%'})
        .next()
        .fadeIn(1)
        .end()
        .appendTo('#slideshow7');
},  4500);