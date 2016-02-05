/**
 * Created by vshivakumar on 12/9/15.
 */


$(document).ready(function(){

    $('#header').load("header.html");
    $('#footer').load("footer.html");

    //$("#slideshow1 > div.imgCont:gt(0)").hide();
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



});