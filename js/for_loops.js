"use Strict"

function showMultiplicationTable(num){

    for(var i = 1; i < 11; i++){
        let a = (num * i);
        console.log(`${num} x ${i} = ${a}`);
    }
}
showMultiplicationTable(7);



for (var i = 0; i < 10; i++) {
    var randomNumber = Math.floor(Math.random()*180+20);
        if (randomNumber%2 === 0) {
            console.log(randomNumber + " is even.");
        }
        else{
            console.log(randomNumber + " is odd");

    }

}
for(i=1; i <=9; i++){
    var tree = [];
    for (a=1; a<=i; a++){
        tree.push(i);
    }
    console.log(tree.join(""));
}

for(i=100; i>4; i--){
    if(i%5 === 0){
        console.log(i);
    }
}

