/* Reverse letters in the string */

function reverseLetters(string){
    return string.split("").reverse().join("");
};

const string1 = "entry to palindrome checker";
console.log(reverseLetters(string1));