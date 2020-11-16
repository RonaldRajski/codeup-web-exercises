// #1 2squared until 2 square 16


// for (var i = 1; i <= 16; i++){
// console.log(Math.pow(2, i));
// }

var x =2;
while (x<=65536){
    console.log(x);
    x*=2
}


// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5


console.log("I have this many cones to sell: " + allCones);

do {
    var conesPurchased = Math.floor(Math.random() * 5) + 1;

    if (conesPurchased > allCones) {
        console.log("I' m outta cones " + conesPurchased + "but all I got left is:" + allCones);
    }
    else
        {
            allCones = allCones - conesPurchased;
            console.log(conesPurchased + "is how many you want?  No Problem!" + allCones + " Left to sell!");
        }
    }
    while (allCones > 0)

        console.log("Yeah I sold all my cones");

