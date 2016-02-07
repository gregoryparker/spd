/**
 * Created by vshivakumar on 2/6/16.
 */
$(document).ready(function(){
    $('#header').load("header.html");
    $('#footer').load("footer.html");

    $("#slideshow > div:gt(0)").hide();

    setInterval(function() {
        $('#slideshow > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#slideshow');
    },  3000);

});