/*
Check if the word is a palindrome
*/

function isAPalindrome(str) {
    str = str.toLowerCase();
    str = str.replace(/[^a-zA-Z0-9]/g, "");
    const reversed = str.split("").reverse().join("");
    if (str === reversed){
        return "It's a palindrome.";
    }else{
        return "It's not a palindrome.";
    };
};

// const str="work";
// console.log(isAPalindrome(str));


module.exports = isAPalindrome;