"use strict"

// // 1.  Write a function, `filterNumbers()` that takes in an array of mixed data types and returns an array of only the
// // numbers type in ascending order.
//
// function filterNumbers(inputArray){
//     var numberBucket = [];
//     inputArray.forEach((function(item){
//         if (typeof item === "number"){
//             numberBucket.push(item)
//         }
//     }))
//
//
//     return numberBucket.sort(function(a,b)){
//         return a-b;
//     }
//
//
// }
//
//
//
// console.logfilterNumbers(["fred", true, 5, 3]) //[3, 5]
//
//
// // 2. Write a function, `getOlder()` that takes in array of dog objects and increases
// // the value of the age properties by 1.
//
//
//
// var dogList = [
//     dog  {
//         name: "Chompers",
//         breed: "Pug",
//         age: 7
//     },
//     {
//         name: "Freddy",
//         breed: "Lab",
//         age: 4
//     },
//     {
//         name: "Mr. Pig",
//         breed: "Mastif",
//         age: 10
//     }
// ];
// function getOlder(dogs){
//     dogs.forEach(function (dog){
//         dog.age +1;
//         // dog.age ++;
//     }
//     return dogs
// }
//
// (dog.age+[i]);
//
// function getOlder(dogsArray) {
//     var bucket = [];
//
//     dogsArray.forEach(function (dogs) {
//         return (dog.age + 1)
//     })
//     return dogs
// }
// console.log(getOlder((dogList));
//
// var carlist = [
//     {
//         make: 'Volvo',
//         color: 'red',
//         year: 1996,
//         isDirty: true
//     },
//     {
//         make: 'Toyota',
//         color: 'black',
//         year: 2004,
//         isDirty: false
//     },
//     {
//         make: 'Ford',
//         color: 'white',
//         year: 2007,
//         isDirty: true
//     }
// ]
//
// function washCars([cars]){
//     cars.forEach(function(car){
//         if(car.isDirty === true){
//             return false;
//         }
//
//     }
//
// });
//
// function washCars(cars){
//     cars.forEach(function (car) {
//         car.isDirty === false;
//     })
//     return cars;
// }
// console.log(washCars(carlist));
//
//
// // 4. Write a function, `adminList()` that takes in an array of user objects and returns a count of all admins based on the
// // isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.
//
//
//
// var userList = [
//
//     {
//         isAdmin: true,
//         email: 'user1@email.com'
//     },
//     {
//         isAdmin: true,
//         email: 'user2@email.com'
//     },
//     {
//         isAdmin: false,
//         email: 'user3@email.com'
//     }
// ];
//
// function adminList(users){
//     var totalAdminCount = 0;
//     users.forEach(function(user) {
//         if (user.isAdmin) {
//             totalAdminCount += 1;
//         }
//     })
//     console.log(adminList(userList));
// }
//
// function adminList(users){
//     var adminEmailBucket =[];
//     users.forEach(user){
//         if(user.isAdmin){
//             adminEmailBucket.push(user.email)
//         }
//     })
// return adminEmailBucket;
// }
//
// console.log(adminList(userList)
//
// }
//
// function adminList(users){
//     var totalAdminCount = 0;
//     users.forEach(function(user) {
//         if (user.isAdmin) {
//             totalAdminCount += 1;
//         }
//     })
//     console.log(adminList(userList));
// }
//
// function adminList(users){
//     var adminBucket =[];
//
//     users.forEach(user){
//         if(user.isAdmin){
//             adminBucket.push(user)
//         }
//     })
// return adminBucket;
// }
//
// console.log(adminList(userList)
//
// }
//
//
//
//
//
// ```js
//        // Example Output (before refactor): 2
//
//
//         // Example Output (after 1st refactor):
//         [
//             'user1@email.com',
//             'user2@email.com'
//         ]
//
//
//         // Example Output (after 2nd refactor):
//         [
//              {
//                  isAdmin: true,
//                  email: 'user1@email.com'
//              },
//              {
//                  isAdmin: true,
//                  email: 'user2@email.com'
//              }
//          ]
//
// var dogs = [
//     {
//         name: "Chompers",
//         breed: "Pug",
//         age: 7
//     },
//     {
//         name: "Freddy",
//         breed: "Lab",
//         age: 4
//     },
//     {
//         name: "Mr. Pig",
//         breed: "Mastif",
//         age: 10
//     }
// ];
// // function getOlder (dog.age+[i]);
// //
// // function getOlder(dogsArray){
// //     var bucket = [];
//
//     dogs.forEach(function(dog){
//         return (dog.age + 1)
//     }
// })
//
// return bucket;
// }
//
//         5. Create a function, `makeSandwichObjects()` that takes in two array of strings, breads and fillings and returns an array
// of sandwichObjects
// that contain properties for bread and filling and values correspond to the same order of the two passed in arrays.
// Assume the two array inputs are the same length.
//
//     ```js
// //     Example Input:
//
// var breadList  = [
//     "white",
//     "wheat",
//     "rhy",
//     "white"
// ];
//
// var fillingList = [
//     "pb&j",
//     "ham",
//     "cheese steak",
//     "tuna"
// ];
//
// function makeSandwichObjects(breads,fillings){
//     for var i = 0; i<breads.length; i++)
//
// {
//     var sandwichObject = {
//         bread: breads[i];
//         filling: fillings[i];
//     }
//     sandwichBucket.push(sandwichObject);
// }
// return sandwichBucket;
//
//
// sandwichBucket.push({
//     bread: breads[i];
//     filling: fillings[i];
//
// })
//
// console.log(makeSandwichObjects(breadList,fillingList));
//
//
//
//
//
//
//
//
// return sandwichBucket
//
//
// }
//
// // TODO Write a function named keepYellow that accepts an array of strings and returns an array with all the strings that are equal to "yellow"
//
// function keepYellow(strings){
//     var keepYellowBucket = [];
//     strings.forEach(function (str){
//         if (str  === "yellow"){
//             yellowBucket.push(str);
//
//         }
//
//     })
//
//     return yellowBucket;
// }
// return  keepYellowBucket();
//
// console.log(keepYellow(["yellow", "red", "blue", "yellow", "black", "brown", "yellow"]));
//
//
//
//
//
// console.log(keepYellow(["yellow", "red", "blue", "yellow", "black", "brown", "yellow"]));
//
// makeSandwichObjects(breads, fillings) // example call to the function

// ------------- PRACTICE 1
//TODO: Write a function, filterNumbers() that takes in an array of mixed data types and returns an array of only the numbers type in ascending order.
//1. Write a function --> filterNumbers
//2. Accepts an array --> parameter --> bc its an array- we have to loop
//3. Mixed Data type --> we need to check to see if this is a number
//4. Return an array --> we need an empty array to return
//5. Ascending order --> .sort()

var testInput = ["fred", true, 5, 3];

function filterNumbers(arrayOfData){
    var newArray = [];

    arrayOfData.forEach(function (data) {
        if(typeof data === "number"){
            newArray.push(data);
        }
    })

    return newArray.sort();

}

console.log(filterNumbers(testInput));;

//https://www.w3schools.com/jsref/jsref_sort.asp
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort


// ------------- PRACTICE 2
// TODO: Write a function, getOlder() that takes in array of dog objects and increases the value of the age properties by 1.
//1. write a function --> getOlder()
//2. Takes an array --> parameter & we have to loop
//3. .age +=1 (?)


var dogs = [
    {
        name: "Chompers",
        breed: "Pug",
        age: 7
    },
    {
        name: "Freddy",
        breed: "Lab",
        age: 4
    },
    {
        name: "Mr. Pig",
        breed: "Mastif",
        age: 10
    }
];

function getOlder(arrayOfDogs){
    arrayOfDogs.forEach(function (dog) {
        dog.age += 1;
    });

    return arrayOfDogs;
}

console.log(getOlder(dogs));


// ------------- PRACTICE 3
//TODO: Write a function, washCars() that takes in a array of car objects and sets the boolean properties of isDirty to false
//1. write a function --> washCars()
//2. takes in array --> parameter & loop
//3. .isDirty -> false
//4. return

var cars = [
    {
        make: 'Volvo',
        color: 'red',
        year: 1996,
        isDirty: true
    },
    {
        make: 'Toyota',
        color: 'black',
        year: 2004,
        isDirty: false
    },
    {
        make: 'Ford',
        color: 'white',
        year: 2007,
        isDirty: true
    }
];

function washCars(cars){
    cars.forEach(function (car) {
        car.isDirty = false;
    });

    return cars;
}

console.log(washCars(cars));


// ------------- PRACTICE 4
// TODO: Write a function, adminList() that takes in an array of user objects and returns a count of all admins based on the isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.
//1. write a function --> adminList()
//2. takes an array -> parameter & loop
//3. we need a counter variable & increase count when isAdmin is true (in the loop)
//4. returns count of admin users

var users = [
    {
        isAdmin: true,
        email: 'user1@email.com'
    },
    {
        isAdmin: true,
        email: 'user2@email.com'
    },
    {
        isAdmin: false,
        email: 'user3@email.com'
    }
];

// function adminList(users){
// 	var countOfAdmins = 0;
//
//     users.forEach(function (user) {
//         if(user.isAdmin){
//             countOfAdmins++;
//         }
//     });
//
// 	return countOfAdmins;
// }

// function adminList(users){
//
//     var adminEmails = [];
//
//     users.forEach(function (user) {
//         if(user.isAdmin){
//             adminEmails.push(user.email);
//         }
//     });
//
// 	return adminEmails;
// }

function adminList(users){

    var admins = [];

    users.forEach(function (user) {
        if(user.isAdmin){
            admins.push(user);
        }
    });

    return admins;
}

console.log(adminList(users));


// ------------- PRACTICE 5
//TODO: Create a function, makeSandwichObjects() that takes in two array of strings, breads and fillings and returns an array of sandwichObjects that contain properties for bread and filling and values correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length.
//1. Write a function makeSandwichObjects()
//2. Takes in 2 arrays --> 2 Parameters
//3. We need to loop using a for loop -> index will be important here
//4. Return an Array of objects --> we need an empty array
//5. we will need to create these sandwichObjects --> bread & filling


var breads  = [
    "white",
    "wheat",
    "rhy",
    "white"
];

var fillings = [
    "pb&j",
    "ham",
    "cheese steak",
    "tuna"
];

function makeSandwichObjects(breads, fillings){
    var sandwichArray = [];

    for(var i=0; i< breads.length; i++){
        // var sandwichObject = {};
        // sandwichObject.bread = breads[i];
        // sandwichObject.filling = fillings[i];
        // sandwichArray.push(sandwichObject);

        sandwichArray.push({
            bread: breads[i],
            filling: fillings[i]
        })
    };

    return sandwichArray

}

console.log(makeSandwichObjects(breads, fillings));;
