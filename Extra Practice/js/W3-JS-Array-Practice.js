"use strict"

// 1. Write a JavaScript function to check whether an `input` is an array or not.

function is_array(arr){
    if(toString.call(arr) === "[object Array]"){
        return true;
    }
}
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

2. // Write a JavaScript function to clone an array

function cloneArray(arr){
    return arr.slice(0);
};
console.log(cloneArray([1, 2, 4, 0]));
console.log(cloneArray([1, 2, [4, 0]]));

// 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array

function first(arr) {
    if(arr = []){
        return null;
    }
    return arr[0];

};

    console.log(first([7, 9, 0, -2]));
    console.log(first([],3));
    console.log(first([7, 9, 0, -2],3));
    console.log(first([7, 9, 0, -2],6));
    console.log(first([7, 9, 0, -2],-3));
