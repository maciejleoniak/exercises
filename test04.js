/*
Check if the string contains only digits
*/

function containsOnlyDigits(string) {
    return /^\d+$/.test(string);
};

// const string1 = "test1";
// const string2 = "123";

// console.log(containsOnlyDigits(string1));
// console.log(containsOnlyDigits(string2));

// test script // 

function testcontainsOnlyDigits() {

const string1 = "12345";
const expected1 = true;
const result1 = containsOnlyDigits(string1);
console.log("Test 1 - Expected:", expected1);
console.log("Test 1 - Result:", result1);
console.log("Test 1 - Pass:", result1 === expected1);
}

testcontainsOnlyDigits()
