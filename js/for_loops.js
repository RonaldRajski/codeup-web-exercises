"use Strict"

function showMultiplicationTable(num){

    for(var i = 1; i <= 10; i++){
        let a = (num * i);
        // console.log(`${num} x ${i} = ${a}`);
        console.log(num + " x " + i + " = " + a);
    }
}
showMultiplicationTable(7);



for (var i = 0; i < 10; i++) {
    var randomNumber = Math.floor(Math.random()*(200-20)+20);
        if (randomNumber%2 === 0) {
            console.log(randomNumber + " is even.");
        }
        else{
            console.log(randomNumber + " is odd");

    }

}
// for(i=1; i <=9; i++){
//     var tree = [];
//     for (a=1; a<=i; a++){
//         tree.push(i);
//     }
//     console.log(tree.join(""));
// }

for(var count3 =1; count3 <10; count3++){
    console.log((count3.toString().repeat(count3)));
}

// for (var outer = 1; outer <= 9; outer++){
//     var output = '';
//
//     for (var inner =1; inner <= outer; inner++){
//         output = output + outer;
//     }
//     console.log(output);
// }

for(i=100; i>4; i--){
    if(i%5 === 0){
        console.log(i);
    }
}

// extra practice

for (var i =1; i <101; i++){
    if(i % 15 ===0){
    console.log("FizzBuzz");
}

else if(i % 3 === 0){
    console.log("Fizz");

}
else if(i % 5 === 0){
    console.log("Buzz");
}
else console.log(i);
}

// decrement 100 Codeup 4, 5 20

for (var i =100; i >3; i --){
    if(i % 20 === 0){
        console.log("Codeup");
    }
    else if(i % 5 === 0){
        console.log("Code");
    }
    else if(i % 4 === 0){
        console.log("up");
    }
    else
        console.log(i);
}


// for (var i=1; i < 101; i++){
//     if (i % 15 == 0) console.log("FizzBuzz");
//     else if (i % 3 == 0) console.log("Fizz");
//     else if (i % 5 == 0) console.log("Buzz");
//     else console.log(i);
// }

// Practice Multiplication table

function showMultiplicationTable2(num){

    for(var i = 1; i <= 10; i++){
        let a = (num * i);
        // console.log(`${num} x ${i} = ${a}`);
        console.log(num + " x " + i + " = " + a);
    }
}
showMultiplicationTable2(2);

for(var count4 =1; count4 <10; count4++){
    console.log((count4.toString().repeat(count4)));
}