// "use strict";




// When a list item inside of the ul with the id of hl-toggle is first clicked, the background of the li that was clicked
// should change to yellow. When a list item that has a yellow background is clicked, the background should change back to the original background.



// $(`#hl-toggle li`).click(400, function (item) {
//     // jquery targets the li element that is a descendant of #h1- toggle
//     // 400 is the time parameter associated with the function
//
//
//
//     console.log($(item.target).css("background-color"));
//
//     if($(item.target).css("background-color") != "rgb(255, 255, 0)"){
//         // Had to target the rgb value assoicated with the background color yellow stating that if it is not yellow make it so it is yellow
//         $(item.target).css("background-color", "yellow");
//     }
//     else{
//         $(item.target).css("background-color", "white");
//     }
// });

// When the button with the id of upcase-name is clicked, the element with the id of output should display the text "Your name uppercased is: " +


// the value of the input element with the id of input transformed to uppercase.
//
//     Demo


// var upcase-name = document.getElementById('upcase-name');
// upcase-name.addEventListener('click', listener);


// .innerHTML="Your name uppercased is: " + <input type="text">;


var output = document.getElementById("output");
var input = document.getElementById("input");
// $( "#upcase-name" ).click(function() {
//     return ("Your name uppercased is: " + output.innerHTML (output.innerHTML = "Your name uppercased is: " + input.toUpperCase));
// });
// function (){
//     output.innerHTML= "Your name uppercased is: " + input;
// }
$("#uppercase-name").click(function(){
     output.innerHTML = "Your name uppercased is:" + input.value.toUpperCase();
})




