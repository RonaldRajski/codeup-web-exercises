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

function first(arr, n) {
    if (arr == null)
        return void 0;

    if (n == null)
        return arr[0];

    if (n < 0)
        return [];
        return arr.slice(0, n);
    }



    console.log(first([7, 9, 0, -2]));
    console.log(first([], 3));
    console.log(first([7, 9, 0, -2], 3));
    console.log(first([7, 9, 0, -2], 6));
    console.log(first([7, 9, 0, -2], -3));

// 4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

function last(arr, n){
    if(arr == null)
        return void 0;

    if(n == null)
        return arr[arr.length -1];
    return arr.slice(Math.max(arr.length - n, 0))
};

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));

// 5. Write a simple JavaScript program to join all elements of the following array into a string
 let myColor = ["red", "green", "white", "black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));


// Red,Green,White,Black
// Red,Green,White,Black
// Red+Green+White+Black

// 6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

// const num=window.prompt();
// const str = num.toString();
// const result = [str[0]];
//
// for(let x=1; x<str.length; x++)
// {
//     if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
//     {
//         result.push('-', str[x]);
//     }
//     else
//     {
//         result.push(str[x]);
//     }
// }
// console.log(result.join(''));

// Write a JavaScript program to sort the items of an array. Go to the editor

var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];

console.log(arr1.sort());

// Sample Output : -4,-3,1,2,3,5,6,7,8

8 // Write a JavaScript program to find the most frequent item of an array. Go to the editor
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

var arr2=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];


function removeDuplicates(num) {
    var x,
        len=num.length,
        out=[],
        obj={};

    for (x=0; x<len; x++) {
        obj[num[x]]=0;
    }
    for (x in obj) {
        out.push(x);
    }
    return out;
}
var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
result = removeDuplicates(Mynum);
console.log(Mynum);
console.log(result);








