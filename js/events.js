/**
 * Created by vshivakumar on 2/6/16.
 */

// Makes the grid a masonry grid
$(window).on('load', function(){
    $('#grid').masonry({
        columnWidth: 1,
        itemSelector: '.grid-item'
    });
});

// Script to load in all grid items
$(document).ready(function(){
    var eventList = [
        "spring2016/rushflier.jpg",
        "fall2015/clothingdrive.jpg",
        "fall2015/sexharassment.jpg",
        "fall2015/bubbletea.jpg",
        "fall2015/resumereview.jpg"
    ];

    for(var i = 0; i < eventList.length; i++){
        var gridItemString = '<div class="grid-item event shadow"><a href="images/fliers/';
        gridItemString += eventList[i];
        gridItemString += '"><img class="small" src="images/fliers/';
        gridItemString += eventList[i];
        gridItemString += '"width="100%"></a><img class="enlarge" src="images/fliers/';
        gridItemString += eventList[i];
        gridItemString += '" width="200%">';

        $('#grid').append($(gridItemString));
    }
});