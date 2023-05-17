/*
Check if the word is a palindrome
*/

function isAPalindrome(str) {
    str = str.toLowerCase();
    const reversed = str.split("").reverse().join("");
    if (str == reversed){
        return "It's a palindrome.";
    }else{
        return "It's not a palindrome.";
    };
};

const str1="work";
console.log(isAPalindrome(str1));
const str2="abBa";
console.log(isAPalindrome(str2));
