"use strict";


// JS basics

// alert('Hello World');
//
// let js = 'amazing';
// if (js === 'amazing'){
//     alert('JS is fun!');
// }

console.log(40+3-7*2);

// Values

// assignments

// values and variables

let country = "United States";
let continent = "North America";
let population = 360000000;

console.log(country);
console.log(continent);
console.log(population);

// Data Types

let isIsland = false;
let language = "English";

console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof country);
console.log(typeof language);

let description = "Portugal is in Europe, and its  11 million people speak Portuguese";

console.log(population / 2);
console.log(population * 2);
population++;
console.log(population > 6);
console.log(population < 33);
const description1 = country + ' is in ' + continent + ', and its ' + population + ' million speak ' + language;
console.log(description1);


const description3 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description3);

if (population > 33){
    console.log(`${country} 's population is above average`);
}
else {
    console.log(`${country} 's population is ${33 - population}below average`);

}

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

// const numNeighbors = Number(
//     prompt('How many neighbor countries does your country have?'),
// );
//
// if (numNeighbors ===1){
//     console.log('Only one border');
// }else if(numNeighbors > 1){
//     console.log('More than 1 border');
// }
// else{
//     console.log('No borders');
// }



// JavaScript Fundamentals – Part 1
// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
//     BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
//     1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

let markMass1 = 78;
let markHeight1 = 1.69;
let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass1 = 92;
let johnHeight1 = 1.95;
let johnMass2 = 85;
let johnHeight2 = 1.76;


const BMIMark1 = markMass1 / markHeight1 ** 2;
const BMIMark2 = markMass2 / markHeight2 ** 2;
const BMIJohn1 = johnMass1 / johnHeight1 ** 2;
const BMIJohn2 = johnMass2 / johnHeight2 ** 2;


let markHigherBMI1 = BMIMark1 > BMIJohn1;
let markHigherBMI2 = BMIMark2 > BMIJohn2;

console.log(BMIMark1 +" Mark1");
console.log(BMIMark2);
console.log(BMIJohn1);
console.log(BMIJohn2);
console.log(markHigherBMI1);
console.log(markHigherBMI2);


// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
//     Your tasks:
//     1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement �

let firstname ='Jonas';
let job = 'teacher';
let birthYear = 1991;
let year = 2037;

const jonas = "I'm " + firstname + ",a " + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);


if(BMIMark1 > BMIJohn1){
    console.log("Mark's BMI is higher that John's");
}
else{
    console.log(("John's BMI is higher than Mark's"));
}





