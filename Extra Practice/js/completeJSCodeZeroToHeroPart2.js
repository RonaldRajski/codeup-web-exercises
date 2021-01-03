"use strict";

let hasDriversLicense = false;
const passTest = true;


if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log(("I can drive :D"));

// const interface = 'Audio';
// reserved word

// Functions

function logger(){
    console.log("you logged in");
}
// calling running or invoking the function
logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice =`Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);


function calcAge1(birthYeah){
    return  2037 - birthYeah;
}

const age1 = calcAge1(1991);
console.log(age1);

const calcage2 = function (birthyeah){
    return 2037 - birthyeah;
}
const age2 = calcage2(1991);

console.log(age1, age2);

const yearsUntilRetirement = (birthYeah, firstName)=>{
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    // return retirement
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1918, 'Bob'));

// Functions calling other functions

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor2(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);


    const juice =`Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor2(2, 3));





