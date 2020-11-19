// 80
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

console.log(secondTree);
console.log(thirdFlower);  //dandelion
console.log(secondFlower); //tulip

