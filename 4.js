/*
Check if the string contains only digits
*/

function containsOnlyDigits(string) {
    return /^\d+$/.test(string);
};

const string1 = "test1";
const string2 = "123";

console.log(containsOnlyDigits(string1));
console.log(containsOnlyDigits(string2));