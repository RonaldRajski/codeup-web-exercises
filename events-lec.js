"use strict"

// Where we were before

var searchInput =document.getElementById('searchHats');

searchInput.addEventListener("input", function (){
    console.log(searchInput.value);
} )

function logSearch(){
    console.log(searchInput.value);
}
searchInput.addEventListener("input", logSearch)


// jQuery: not top to bottom different, but it helps to understand similar logic / methods in JS

$('searchInput').on("input", function (){
    console.log(searchInput.value);
})

$('searchInput').on("input", logSearch);

// Still have a targe -id, element, class

$('selector').event('eventName', function(){

});

$('#best-seller').click(function () {
    $(this).css('background-color', 'red');
    $(this).css('color', 'lawngreen');
    $(this).css('width', 'max-content');

    $("ol li:nth-child(even)").css('background-color', 'red');
    $("ol li:nth-child(even)").css('color', 'antiquewhite');
    $("ol li:nth-child(even)").css('width', 'max-content');

    $("ol li:nth-child(odd)").css('background-color', 'forestgreen');
    $("ol li:nth-child(odd)").css('color', 'antiquewhite');
    $("ol li:nth-child(odd)").css('width', 'max-content');

})

// .dblclick() + event.target similar to click, look for a dbl clic on element
// look too: we can see and use event.target to see who trigged that event

$("body").dblclick(function (event){
    console.log("User clicked: " + event.target.nodeName);
})
    // Get an idea here: Lets make our DBL clicks make our Fonts larger
// this vs event.target


function bigFont(){
    $(this).css("font-size", "200%");
}

// Whoops!!! that made the whole body's font increase!!

function bigFont(e){
    $(e.target).css("font-size", "200%");
    // just gets the item dblclicked
}

$(".hat-sold: last").hover(function (){
    $("#bugReport").toggle(500);
    $('.hat-sold:last').css("text-decoration", "line-through")
})

$('.hat-sold: last').hover(function (){

})

// keyboard events