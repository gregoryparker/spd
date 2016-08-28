/**
 * Created by vshivakumar on 2/6/16.
 */

// Preload GIF
$.fn.preload = function(){
    this.each(function(){
        $('<img/>')[0].src = this;
    })
};
$(['/images/symbols/loading.gif']).preload();


// Makes the grid a masonry grid
$(window).on('load', function(){
    $('#grid').masonry({
        columnWidth: 1,
        itemSelector: '.grid-item'
    });
});

// For the loading gif
document.onreadystatechange = function () {
    var state = document.readyState;
    if (state == 'interactive') {
        document.getElementById('contents').style.visibility="hidden";
    } else if (state == 'complete') {
        setTimeout(function(){
            document.getElementById('interactive');
            document.getElementById('load').style.visibility="hidden";
            document.getElementById('contents').style.visibility="visible";
        },1000);
    }
};

// Script to load in all grid items
$(document).ready(function(){
    var eventList = [
        ["fall2016/fall_rush_2016.jpg", ""],
        ["spring2016/spdtid.jpg", "A picture of our brothers enjoying one last night out before our international brothers go back to their homes hundreds and thousands of miles away. Even our alumni came to celebrate! #ΣΦΔ"],
        ["spring2016/iotas.jpg", "Welcome aboard Iota Class and congrats to Carlos Mero on your kids! Your journey with us is only beginning and we know how much you will all bring to the brotherhood. May many memories be made and good times had"],
        ["spring2016/engball.jpg", "Brothers with the sisters of AOE at last weekend's 14th annual Engineering Ball!"],
        ["spring2016/bitcamp.jpg", "Brothers Greg, Varun, Eddie, and Nkosi having fun in the MLH photobooth at bitcamp! Bitcamp was a recent hackathon at the University of Maryland. Their project was an android and web application utilizing Capitol One's Nessie API!"],
        ["spring2016/carwashpic.jpg", "A big thanks to everyone who came out to the annual SPD x ASA car wash on Saturday! It's always a pleasure collaborating with you ladies Alpha Sigma Alpha - Zeta Iota Chapter"],
        ["spring2016/carwash.jpg", ""],
        ["spring2016/engineeryourfuture.jpg", "Last week our Chapter Councilor and brother Peter \"Consigliere\" LaPiana attended the Engineer Your Future event as a guest speaker. Pete educated attendees about preparing to join the workforce and spread industry knowledge at the event. Thanks for your unwavering commitment to our brotherhood, Consigliere!"],
        ["spring2016/greekweek.jpg", "Last week we took 1st place in Greek Week with Stony Lambdas and Alpha Omega Epsilon at SUNY Stony Brook! Thanks for competing with us and making Greek Week a great experience."],
        ["spring2016/redwatchband.jpg", "We are red watch band certified! A big thank you to the peer health educator who taught us!"],
        ["spring2016/bubbletea.jpg", ""],
        ["spring2016/sixsigma.jpg", ""],
        ["spring2016/htbaw.jpg", ""],
        ["spring2016/rushflier.jpg", ""],
        ["fall2015/clothingdrive.jpg", ""],
        ["fall2015/sexharassment.jpg", ""],
        ["fall2015/bubbletea.jpg", ""],
        ["fall2015/resumereview.jpg", ""]
    ];

    for(var i = 0; i < eventList.length; i++){
        var gridItemString = '<div class="grid-item event shadow"><a href="images/fliers/';
        gridItemString += eventList[i][0];
        gridItemString += '"><img class="small" src="images/fliers/';
        gridItemString += eventList[i][0];
        gridItemString += '"width="100%"></a><img class="enlarge" src="images/fliers/';
        gridItemString += eventList[i][0];
        gridItemString += '" width="250%">';
        gridItemString += '<div>'+eventList[i][1]+'</div></div>';

        $('#grid').append($(gridItemString));
    }
});