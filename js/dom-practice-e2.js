/**
 * Write your solutions here
 //  */
// You may modify the HTML attributes and include jQuery in the project to help you solve the problems below.
//
//     When the button with the id of change-bg-color is clicked the background of the page should turn blue.
//
//     Demo

function myFunction() {
    document.getElementById("change-bg-color").click(); // Click on the checkbox
    document.body.style.backgroundColor = "blue";
}

//
// When the button with an id of append-to-ul is clicked, append an li with the content of text to the ul with the id of append-to-me.
//

$("#append-to-ul").click(function () {
    $("#append-to-me").append("<li>text</li>");
});

    // Two seconds after the page loads, the heading with the id of message should change it's text to "Goodbye, World!".
//
// Demo

    // window.onload = function() {
    //     setTimeout(function () {
    //         document.getElementById("message").innerHTML = "Goodbye, World!";
    //     }, 2000);
    // }

setTimeout(function () {
    $("#message").text("Goodbye, World!");
}, 2000);


// When a list item inside of the ul with the id of hl-toggle is first clicked, the background of the li that was clicked
// should change to yellow. When a list item that has a yellow background is clicked, the background should change back to the original background.
//
//     Demo
//



var count = 0;
// var li = $("#hl-toggle").children();
var li = $("#hl-toggle > li");

$(li).click(function () {
    count ++;
    console.log(count);
    if (count % 2 !== 0) {
        $(this).css("background-color", "yellow");
    } else {
        $(this).css("background-color", "white");
    }
});









// When the button with the id of upcase-name is clicked, the element with the id of output should display the text "Your name uppercased is: " +
// the value of the input element with the id of input transformed to uppercase.
//
//     Demo


$("#upcase-name").click(function () {
    // get value from element w/ id of input
    // uppercase that string
    // set the value of #output to display "Your name uppercase is: "
    var input = $("#input").val();
    var output = "Your name uppercased is: " + input.toUpperCase();
    $("#output").text(output);
});




// Whenever a list item inside of the ul with the id of font-grow is double clicked, the font size of the list item that
// was clicked should double.

$(`#font-grow li`).click(function() {
    var fontSize = parseInt($(this).css("font-size"));
    fontSize = (fontSize * 2) + "px";
    $('#font-grow li').css({'font-size':fontSize});
    console.log(fontSize);
});
