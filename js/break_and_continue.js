do {
    var randomNumber = Math.floor(Math.random()*50);
    var userNumber = Number(prompt("Pick an odd number between 1 and 50"));
    if (userNumber % 2 === 0)
        alert(userNumber + " is not odd, please pick again");
    else if (userNumber < 1 || userNumber > 50)
        alert(userNumber + " is not between 1 and 50, please pick again");
    else if (isNaN(userNumber))
        alert(userNumber + " is not a number, please pick again");
    else if (randomNumber === userNumber){
        alert("you picked the right number");
    }
    else {
        alert("pick a new number");
        break;
    }
} while (true);

// do {     var userInput = Number(prompt("Pick an odd number between 1 and 50"));     if (userInput % 2 === 0){         alert(userInput + " is not odd, please try again")     }else if (userInput > 50){         alert(userInput + " is greater than 50, please try again")     }else if (userInput < 1){         alert(userInput + " is less than 1, please try again")     }else{         alert("You picked a good one!");         break     } }while (true)

for (var i = 1; i<=50; i++){
    if (i %2 === 0){
        continue;
    }
    if (i === userNumber){
        console.log("yikes! Skipping number: " + i);
    }else{
        console.log("Here is an odd number: " + i);
    }
}

