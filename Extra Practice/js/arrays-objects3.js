// 1. Write a function named isTen that accepts a number and returns a boolean that indicates whether or not that number is equal to 10.

// function isTen(num){
//     if(parseInt(10) === num){
//         return true;
//     }
//     return false;
// }

// answer 1A

function isTen(number) {
    if(number === 10 && !(isNaN(number))){
        return true;
    }else {
        return false;

    }
}



console.log(isTen(1));
console.log(isTen(10));
console.log(isTen('10'));

// Write a function named double that accepts a number and returns the number doubled.

function double(num){
    return parseInt(num * 2);
}


console.log(double(5)); // 10
console.log(double(20)); // 40


/** **/
// function remove9s(array){
//     var output = [];
//     for (var i = 0; i < array.length; i++){
//         if(array[i] === 9){
//             var newarray = array.slice(array[i]);
//         }else {
//             return array;
//         }
//     }
//     return newarray;
// }



function remove9s(array){
    var output =[];
    for(var i = 0; i <array.length; i++){
        if(array[i] !== 9){
            output.push(array[i]);
        }
    }
    return output;
}

var array = [1, 2, 9, true, 9, "9"];
console.log(remove9s(array));
console.log(remove9s([7, 8, 9, 10]));
console.log(remove9s([1, 2, 3]));
console.log(remove9s([9, 9, 9]));



function capitalizeName(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}

console.log(capitalizeName('ron weasley'));
 // "Ron Weasley"

/** answer **/
function capitalizeAllNames(arr){
    var output = []

    arr.forEach(function(fullName){
        output.push(capitalizeName(fullName));
    });
    return output;
}

console.log(capitalizeAllNames(["james lampkins", "john", "jim"]));
console.log(capitalizeAllNames(['ron weasley', 'harry potter']));
// ['Ron Weasley', 'Harry Potter']


function countVowels(str1){
    var vowel_list = 'aeiouAEIOU';
    var vcount = 0;
    for(var i = 0; i < str1.length ; i++)
    {if (vowel_list.indexOf(str1[i]) !== -1)
    {
        vcount += 1;
    }
    }
    return vcount;
}
console.log(countVowels('Hello, Codeup!'));
// 5


var workers = [
    {name: "Jim Halbert", sales: 100},
    {name: "Dwight, Schrute", sales: 50},
    {name: "Andy, Bernard", sales: 150},

];

// function averageSales(workers){
//     var sum = workers[0].sales + workers[1].sales + workers[2].sales;
//     var average = sum / 3;
//     for(var i = 0; 1 < workers.length; i++){
//
//         return average;
//
//     }
// }

/** answer **/
function averageSales(reps){
    var total = 0;
    reps.forEach(function(rep){
        total += rep.sales;
    });
    return total/ reps.length
}

console.log(averageSales([
    {name: 'Jim Halpert', sales: 100},
    {name: 'Dwight Schrute', sales: 50},
    {name: 'Andy Bernard', sales: 150},
]));

// 100

function analyzeWord(input){
    var output = {
        word: input,
        numberOfLetters: input.length,
        numberOfVowels: 3,
    };
    return output
}

console.log(analyzeWord('codeup'));
// { word: 'codeup', numberOfLetters: 6, numberOfVowels: 3 }

// var words = ["html", "css", "javascript"];
// function analyzeAllWords(words){
//     for(var i = 0; i < words.length; i++){
//
//     }
// }

/** answer **/
function analyzeAllWords(arrOfStrings){
    var output = [];
    arrOfStrings.forEach(function(str){
        output.push(analyzeWord(str));

    });
    return output;
}
console.log(analyzeAllWords(['html', 'css', 'javascript']));


function padArray(array, length, fill) {
    return length > array.length ? array.concat(Array(length - array.length).fill(fill)) : array; }

const numbers = [1, 2, 3];
console.log(padArray(numbers, 5, 0));
console.log(padArray(numbers, 5, 'a'));
console.log(padArray(numbers, 2, 0));










