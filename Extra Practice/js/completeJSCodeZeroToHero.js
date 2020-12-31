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

if(BMIMark1 > BMIJohn1){
    console.log(`Mark's BMI (${BMIMark1}) is higher that John's (${BMIJohn1})!`);
}
else{
    console.log(`John's BMI (${BMIJohn1})  is higher than Mark's (${BMIMark1})`);
}

// conversion versus coercion

const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);


// type coercion

console.log(('I am ' + 23 + 'years old'));
console.log('23' - '10' - 3);


const hasDriversLicense = true;
const hasGoodVision =  true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);

// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
//     Your tasks:
//     1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
//     score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
//     § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

var scoreDolphins = (96 + 108 + 89)/3;
var scoreKoalas = (88 + 91 + 110)/ 3;

var scoreDolphins1 = (97 + 112 + 101)/3;
var scoreKoalas1 = (109 + 95 + 123)/ 3;

var scoreDolphins2 = (97 + 112 + 101)/3;
var scoreKoalas2 = (109 + 95 + 106)/ 3;



console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins > scoreKoalas){
    console.log("Dolphins win the trophy!");
}
else if(scoreKoalas > scoreDolphins){
    console.log("Koalas win the trophy");
}
else{
    console.log("Tie game!");
}

if(scoreDolphins1 > scoreKoalas1 && scoreDolphins1 >= 100){
    console.log("Dolphins win the trophy!");
}
else if(scoreKoalas1 > scoreDolphins1 && scoreKoalas1 >=100){
    console.log("Koalas win the trophy");
}else{
    scoreDolphins1 === scoreKoalas1
    console.log("Tie game!");
}


if(scoreDolphins2 > scoreKoalas2 && scoreDolphins2 >= 100){
    console.log("Dolphins win the trophy!");
}
else if(scoreKoalas2 > scoreDolphins2 && scoreKoalas2 >=100){
    console.log("Koalas win the trophy");
}else if(scoreDolphins2 === scoreKoalas2 && scoreDolphins2 >=100 && scoreKoalas2 >=100){
    console.log("Tie game!");
}
else {
    console.log("No Winner!");

}


// 26 Switch statement

const day = 'Monday';


switch (day) {
    case "Monday":
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;
    case "Tuesday":
        console.log("Prepare theory videos");
        break;
    case "Wednesday":
    case "Thursday":
        console.log("Write code");
        break;
    case "Friday":
        console.log("Record videos");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Enjoy the weekend :D");
        break;
    default:
        console.log("Not a valid day");

}







