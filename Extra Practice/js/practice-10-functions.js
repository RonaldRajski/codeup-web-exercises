"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 */


//TODO: Define a function named isOdd that takes in any input and returns true if the input is an odd number, return false for any other situation. You do not need to consider floating-point and decimal numbers.

// function isANumber(input) {
//     return !isNaN(parseFloat(input));
// }


function isOdd(num) {
    return num % 2 === 1;
}




//TODO: Define a function named isVowel that takes in a single character and returns true if the character is a vowel. *Not including the letter 'y'

function isVowel(input){
    if( input === "a" || input === "A" || input === "e" || input === "E" ||
        input === "i" || input === "I" || input === "o" ||input === "O" ||
        input === "u" ||input === "U" ){
        return true;
    }
    else return false;
}

//TODO: Define a function named combineStrings that takes in two parameters, if both parameters are strings, then return a concatenated string of both parameters. Otherwise, return false.

function combineStrings(par1,par2){
    if(typeof par1 === "string" && typeof par2  === "string"){
        return par1 + par2;
    }
    else
        return false;
}


//TODO: Define a function named sumArgs that takes in three parameters, if they are numbers then add them together. Otherwise return false.

function sumArgs(a,b,c){
    if(typeof a === "number" && typeof b === "number" && typeof c ==="number"){
        return a+b+c;
    }
    else
        return false;
}


//TODO: Define a function named truncateString that takes in a string as the first parameter and a number as the second parameter. Truncate (shorten) the string by the length based on the argument passed in. For example, truncateString("hello world",1) would return "hello worl"

// function truncateString(str, num) {
//     // If the length of str is less than or equal to num
//     // just return str--don't truncate it.
//     if (str.length <= num) {
//         return str;
//     }
//     // Return str truncated with '...' concatenated to the end of str.
//     return str.slice(0, num) + '...';
// }
// function truncateString(str, num) {
//     if (str.length > num) {
//         return str.slice(0, num) + "...";
//     } else {
//         return str;
//     }
// }

function truncateString(str, num) {
    if (num >= str.length) {
        return "";
    }
    else if(typeof str === "string" && typeof num === "number" && num < str.length){
        return str.slice(0, str.length - num);
    }

    else
        return false;


}

// should be a defined function
// should return "tru" if "true" and 1 are passed in as arguments
// should return "" (empty string) if "texas" and 7 are passed in as arguments
// should return false if "san antonio" and "texas" are passed in as arguments
// should return "code" if "codeup" and 2 are passed in as arguments
// should return false if a number is not passed in passed in as the second argument
// should return false if a string is not passed in passed in as the first argument
// should return "super" if "superman" and 3 are passed in as arguments
// should return "hello worl" if "hello world" and 1 are passed in as arguments







//TODO: Define a function named `reverseSign` that takes in a number as the first parameter. Reverse the sign of the argument passed in, return false if the argument is not a number. For example, `reverseSign(1)` would return `-1`.

function reverseSign(num) {
    if(!isNaN(parseFloat(num))){
        return Math.sign(num) * -1;
    }
    else
        return false;
}


//TODO: Define a function named `makeUppercase` that takes in a string as the first parameter. Return the argument passed in entirely uppercased, return false if the argument is not a string. For example, `makeUppercase("test")` would return `"TEST"`.



function makeUppercase(str) {
    if(typeof str === "string" && isNaN(parseInt(str))) {
        return str.toUpperCase();
    }

    else{
        return false;
    }


}


//TODO: Define a function named `isMultiple` that takes in two `number` parameters. Return `true` if one argument is a multiple of the other, `false` otherwise. For example, `isMultiple(2, 6)` would return `true`.

function isMultiple(num1,num2){
    if(num2/num1 === 1){
        return false;
    }
    else if(parseFloat(num2) % parseFloat(num1) == 0){
        return true;
    }
    else
        return false;

}


//TODO: Define a function named `canPurchase` that takes in two `number` parameters, `billAmount` & `availableCash`. Return `true` if `availableCash` is greater than `billAmount`, `false` otherwise. For example, `canPurchase(10, 20)` would return `true`.

function canPurchase(billAmount, availableCash){
    if(parseFloat(availableCash) >  parseFloat(billAmount)){
        return true;
    }
    else
        return false;
}

//TODO: Define a function named `getInitials` that takes in two `string` parameters, `first` & `last`. Return the names combined and formatted as initials, return `false` if either parameter is invalid. For example, `getInitials("John", "Snow")` would return `"J.S."`


function getInitials(first, last) {
    if (first === "" || last === "") {
        return false;
    }
    else if (typeof first === "string" && isNaN(parseInt(first)) && typeof last === "string" && isNaN(parseInt(last))) {
        return first[0].toUpperCase() + "." + last[0].toUpperCase()+".";
    }

    else
        return false;
}