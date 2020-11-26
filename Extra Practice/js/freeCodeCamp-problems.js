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