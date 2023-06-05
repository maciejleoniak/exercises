/*
Check if the string contains only digits
*/

function containsOnlyDigits(str) {
    return /^\d+$/.test(str);
};

// const str = "test1";
// console.log(containsOnlyDigits(str));

module.exports = containsOnlyDigits;