/**
 * Created by vshivakumar on 12/9/15.
 */


$(document).ready(function(){
    $("#slideshow1 > div:gt(0)").hide();
    setInterval(function() {
        $('#slideshow1 > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#slideshow1');
    },  2500);

    $("#slideshow2 > div:gt(0)").hide();
    setInterval(function() {
        $('#slideshow2 > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#slideshow2');
    },  2500);

    $("#slideshow3 > div:gt(0)").hide();
    setInterval(function() {
        $('#slideshow3 > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#slideshow3');
    },  2500);





});