/*
Reverse letters in the string
*/

function reverseLetters(str){
    return str.split("").reverse().join("");
};

// const str = "entry to palindrome checker";
// console.log(reverseLetters(str));

module.exports = reverseLetters;