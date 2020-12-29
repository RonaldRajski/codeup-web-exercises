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