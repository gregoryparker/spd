/**
 * Created by vshivakumar on 12/9/15.
 */


if (screen.width <= 899) {
    $('#footer').css('position', 'fixed')
}

$(document).ready(function(){

    $('#header').load("header.html");
    $('#footer').load("footer.html");

});