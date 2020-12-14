"use strict";

// Palindrone

var letters = [];
// letters is an empty array/stack

var word = "racecar";

    var rword = "";

    // put letters of word into stack

for(var i =0; i <word.lenght; i++){
    letters.push(word[i]);
}

// pop off the stack in reverse order

for (var i = 0; i < word.length; i++){
    rword += letters.pop();

}

if (rword === word){
    console.log(word + " is a palindrome.");
}
else {
    console.log(word + " is not a palindrome");
}


// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  4:49

var Stack = function (){
    this.count = 0;
    this.storage = {};

    // adds value to the end of the stack
    this.push = function(){
        this.storage[this.count] = value;
        this.count ++;
    }

    // Removes and returns the value at the end of the stack

    this.pop = function (){
        if (this.count === 0){
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
    this.size = function (){
        return this.count;

    }

    this.peek = function (){
        return this.storage[this.count -1];
        // peek and pop are similar

    }

    var myStack =  new Stack();
    myStack.push(1);
    myStack.push(2);

    console.log(myStack.peek());
    // returns 2
    console.log(myStack.pop());
    // removes last 1

    console.log(myStack.peek());
    // returns 1

    myStack.push("freeCodeCamp");
    console.log(myStack.size());
    console.log(myStack.peek());
    console.log(myStack.pop());
    console.log(myStack.peek());


}

// 904 time  sets


function mySet() {
    // the var collection will hold the set
    var collection = [];
    // this method will check for the presence of an  element and return true or false

    this.has = function (element){
        return(collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function (){
        return collection;
    };
    // this method will ad an element to the set
    this.add = function (element){
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };
    // this method will remove an element from a set

    this.remove = function (element){
        if(this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        return false
    };
    this.size = function (){
        return  collection.length;
    };

    // this will return the union of the two sets

    this.union = function (otherSet){
        var unionSet = new mySet();
        var firstSet =  this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function (e){
            unionSet.add(e);
        });
        secondSet.forEach(function (e){
            unionSet.add(e);
        });
        return unionSet;
    };

    // this method will return the intersection of two sets as a new set

    this.intersection = function (otheSet){
        var intersectionSet = new Set();
        var firstSet = this.values();
        firstSet.forEach(function (e){
            if(otheSet.has(e)){
                intersectionSet.add(e);
            }
        })
    };

    this.add =function (element){
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };

    // this removes the element from a set

    this.remove =function (element){
        if(this.has(element)){
            index =collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        return false;
    };

    // this will return the size of the collection:



}



















