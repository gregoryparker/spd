/**
 * Created by vshivakumar on 12/9/15.
 */


$(document).ready(function(){
    $("#slideshow1 > div:gt(0)").hide();
    setInterval(function() {
        $('#slideshow1 > div:first')
            .css({'left':'0'})
            .animate({'left':'533px'})
            .next()
            .fadeIn(1)
            .end()
            .appendTo('#slideshow1');
        $('#slideshow2 > div:first')
            .css({'left':'0'})
            .animate({'left':'533px'})
            .next()
            .fadeIn(1)
            .end()
            .appendTo('#slideshow2');
        $('#slideshow3 > div:first')
            .css({'left':'0'})
            .animate({'left':'533px'})
            .next()
            .fadeIn(1)
            .end()
            .appendTo('#slideshow3');
        $('#slideshow4 > div:first')
            .css({'left':'0'})
            .animate({'left':'533px'})
            .next()
            .fadeIn(1)
            .end()
            .appendTo('#slideshow4');
        $('#slideshow5 > div:first')
            .css({'left':'0'})
            .animate({'left':'533px'})
            .next()
            .fadeIn(1)
            .end()
            .appendTo('#slideshow5');
    },  2500);





});