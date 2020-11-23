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
var myArray = [];

// Only change code below this line
// Counting down odds for loop
for(var i = 9; i>0; i -=2){
    myArray.push(i);
}
// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
// 87% complete
// Find the total of the array
var total = 0;
for (var i = 0; i < myArr.length; i++ ){
    total += myArr[i];
}

