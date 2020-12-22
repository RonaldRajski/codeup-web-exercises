// 83
//Setup
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type:"trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }

    ];
var secondTree = myPlants[1].list[1];
var thirdFlower = myPlants[0].list[2];
var secondFlower = myPlants[0].list[1]

console.log(secondTree);    //pine
console.log(thirdFlower);  //dandelion
console.log(secondFlower); //tulip

// 84 Record collection
//setup
var collection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let it Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999','Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439:{
        albumTitle: 'ABBA Gold'
    }
};
function updateRecords(object, id, prop, value) {
    if (prop !== 'tracks' && value !== "") {
        object[id][prop] = value;
    } else if (prop === "tracks" && !object[id].hasOwnProperty("tracks")) {
        object[id][prop] = [value];
    } else if (prop === "tracks" && value !== "") {
        object[id][prop].push(value);
    } else if (value === "") {
        delete object[id][prop];
    }
    return object;
}

console.log(updateRecords(collection, 5439, 'artist', 'ABBA'));

// 83
// Setup
var myArray = [];

// Only change code below this line
var i = 5;
while (i > -1){
    myArray.push(i);
    i--;
}
// 84 For Loop
// Setup
var myArray = [];

// Only change code below this line
for(var i =1; i<6; i++){
    myArray.push(i);
}
// 85
// Setup
var myArray = [];

// Only change code below this line
// increment odd numbers
for(var i = 1; i < 10; i+=2){
    myArray.push(i);
}
// 86
// Setup
let myArray = [];

// Only change code below this line
// Counting down odds for loop
for(var i = 9; i>0; i -=2){
    myArray.push(i);
}
// Setup
let myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
// 87% complete
// Find the total of the array
let total = 0;
for (var i = 0; i < myArr.length; i++ ){
    total += myArr[i];
}
// 88
function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for(var i =0; i< arr.length; i++){
        for (var j=0; j < arr[i].length; j++){
            product = product * arr[i][j];

        }
    }

    // Only change code above this line
    return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);

// 90

// Setup do-while
var myArray = [];
var i = 10;

// Only change code below this line
do{
    myArray.push(i);
    i++;
}
while (i <=10);

// 90
function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }


    // Only change code above this line
}

// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line

// Only change code above this line
}

lookUpProfile("Akira", "likes");

// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
    for (var x = 0; x < contacts.length; x++){
        if (contacts[x].firstName === name){
            if (contacts[x].hasOwnProperty(prop)){
                return contacts[x][prop];
            }else {
                return "No such property";
            }
        }
    }

    return "No such contact";

// Only change code above this line
}

lookUpProfile("Akira", "likes");

function randomWholeNum() {

    // Only change code below this line

    return Math.floor(Math.random()*10);
}

// ****************
function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
    // Only change code above this line
}

// Basic JavaScript: Use the parseInt Function
// The parseInt() function parses a string and returns an integer. Here's an example:
//
// var a = parseInt("007");
//
// The above function converts the string "007" to an integer 7. If the first character in the string can't be converted into a number, then it returns NaN.
//
// Use parseInt() in the convertToInteger function so it converts the input string str into an integer, and returns it.

function convertToInteger(str) {
    return parseInt(str);
}

convertToInteger("56");

// Basic JavaScript: Use the parseInt Function with a Radix
// The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.
//
// The function call looks like:
//
//     parseInt(string, radix);
//
// And here's an example:
//
// var a = parseInt("11", 2);
//
// The radix variable says that "11" is in the binary system, or base 2. This example converts the string "11" to an integer 3.
//
// Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.

function convertToInteger(str) {
    return parseInt(str, 2);
}

convertToInteger("10011");

// The conditional operator, also called the ternary operator, can be used as a one line if-else expression.
//
//     The syntax is:
//
//     condition ? expression-if-true : expression-if-false;
//
// The following function uses an if-else statement to check a condition:
//
//     function findGreater(a, b) {
//         if(a > b) {
//             return "a is greater";
//         }
//         else {
//             return "b is greater";
//         }
//     }
// This can be re-written using the conditional operator:
//
//     function findGreater(a, b) {
//         return a > b ? "a is greater" : "b is greater";
//     }
// Use the conditional operator in the checkEqual function to check if two numbers are equal or not. The function should return either "Equal" or "Not Equal".

function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);

In the previous challenge, you used a single conditional operator. You can also chain them together to check for multiple conditions.

    The following function uses if, else if, and else statements to check multiple conditions:

    function findGreaterOrEqual(a, b) {
        if (a === b) {
            return "a and b are equal";
        }
        else if (a > b) {
            return "a is greater";
        }
        else {
            return "b is greater";
        }
    }
// The above function can be re-written using multiple conditional operators:
//
//     function findGreaterOrEqual(a, b) {
//         return (a === b) ? "a and b are equal"
//             : (a > b) ? "a is greater"
//                 : "b is greater";
//     }
// It is considered best practice to format multiple conditional operators such that each condition is on a separate line, as shown above. Using multiple conditional operators without proper indentation may make your code hard to read. For example:
//
//     function findGreaterOrEqual(a, b) {
//         return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
//     }
// In the checkSign function, use multiple conditional operators - following the recommended format used in findGreaterOrEqual - to check if a number is positive, negative or zero. The function should return "positive", "negative" or "zero".

function checkSign(num) {
    return (num >0) ? "positive" : (num<0) ? "negative" : "zero";
}


checkSign(10);

// In a previous challenge, you learned how to use recursion to replace a for loop. Now, let's look at a more complex function that returns an array of consecutive integers starting with 1 through the number passed to the function.
//
// As mentioned in the previous challenge, there will be a base case. The base case tells the recursive function when it no longer needs to call itself. It is a simple case where the return value is already known. There will also be a recursive call which executes the original function with different arguments. If the function is written correctly, eventually the base case will be reached.
//
//     For example, say you want to write a recursive function that returns an array containing the numbers 1 through n. This function will need to accept an argument, n, representing the final number. Then it will need to call itself with progressively smaller values of n until it reaches 1. You could write the function as follows:
//
//     function countup(n) {
//         if (n < 1) {
//             return [];
//         } else {
//             const countArray = countup(n - 1);
//             countArray.push(n);
//             return countArray;
//         }
//     }
// console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]
// At first, this seems counterintuitive since the value of n decreases, but the values in the final array are increasing. This happens because the push happens last, after the recursive call has returned. At the point where n is pushed into the array, countup(n - 1) has already been evaluated and returned [1, 2, ..., n - 1].
//
// We have defined a function called countdown with one parameter (n). The function should use recursion to return an array containing the integers n through 1 based on the n parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind.

function countup(n) {
        if (n < 1) {
            return [];
        } else {
            const countArray = countup(n - 1);
            countArray.unshift(n);
            return countArray;
        }
    }


    // Using Splice

// We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.

function htmlColorNames(arr) {
    // Only change code below this line
    arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
    // splice(start of splice (0), how many cut out (2)), replacement 1, replacement 2)
    // Only change code above this line
    return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));


// using slice();
// We have defined a function, forecast, that takes an array as an argument. Modify the function using slice() to extract information from the argument array and return a new array that contains the elements 'warm' and 'sunny'.

function forecast(arr) {
    // Only change code below this line



    return arr.slice(2,4);
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


// We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments. The function is supposed to return a new array made up of num copies of arr. We have done most of the work for you, but it doesn't work quite right yet. Modify the function using spread syntax so that it works correctly (hint: another method we have already covered might come in handy here!).

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        // Only change code below this line
        newArr.push([...arr]);
        // Only change code above this line
        num--;
    }
    return newArr;
}

console.log(copyMachine([true, false, true], 2));

// copyMachine([true, false, true], 2) should return [[true, false, true], [true, false, true]]
//
// Passed
// copyMachine([1, 2, 3], 5) should return [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]
//
// Passed
// copyMachine([true, true, null], 1) should return [[true, true, null]]
//
// Passed
// copyMachine(["it works"], 3) should return [["it works"], ["it works"], ["it works"]]
//
// Passed
// The copyMachine function should utilize the spread operator with array arr

// Basic Data Structures: Combine Arrays with the Spread Operator
// Another huge advantage of the spread operator, is the ability to combine arrays, or to insert all the elements of one array into another, at any index. With more traditional syntaxes, we can concatenate arrays, but this only allows us to combine arrays at the end of one, and at the start of another. Spread syntax makes the following operation extremely simple:
//
//     let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
//
// let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
// // thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']
// Using spread syntax, we have just achieved an operation that would have been more complex and more verbose had we used traditional methods.
//
//     We have defined a function spreadOut that returns the variable sentence. Modify the function using the spread operator so that it returns the array ['learning', 'to', 'code', 'is', 'fun'].

function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun'] // Change this line
    return sentence;
}

console.log(spreadOut());

// spreadOut should return ["learning", "to", "code", "is", "fun"]
//
// Passed
// The spreadOut function should utilize spread syntax

// indexOf() can be incredibly useful for quickly checking for the presence of an element on an array. We have defined a function, quickCheck, that takes an array and an element as arguments. Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not.

function quickCheck(arr, elem) {
    // Only change code below this line

    // Solution 1
// if (arr.indexOf(elem) >= 0){
//   return true
// }
// else
//   return false;

// Solution 2

// return arr.indexOf(elem) != -1;

// ternary

    return arr.indexOf(elem) >= 0 ? true: false;


    // Only change code above this line
}





console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// The quickCheck function should return a boolean (true or false), not a string ("true" or "false")
//
// Passed
// quickCheck(["squash", "onions", "shallots"], "mushrooms") should return false
//
// Passed
// quickCheck(["onions", "squash", "shallots"], "onions") should return true
//
// Passed
// quickCheck([3, 5, 9, 125, 45, 2], 125) should return true
//
// Passed
// quickCheck([true, false, false], undefined) should return false
//
// Passed
// The quickCheck function should utilize the indexOf() method

// fizzbuzz

for (var i=1; i <= 100; i++)
{
    if (i % 3 == 0 && i % 5 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}




