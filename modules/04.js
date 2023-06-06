/*
Check if the string contains only digits
*/

function containsOnlyDigits(str) {
    return /^\d+$/.test(str);
};

const str = "7799043";
console.log(str);
console.log('containsOnlyDigits:',containsOnlyDigits(str));

module.exports = containsOnlyDigits;