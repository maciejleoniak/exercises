/*
Reverse letters in the string
*/

function reverseLetters(string){
    return string.split("").reverse().join("");
};

const string1 = "entry to palindrome checker";
console.log(reverseLetters(string1));

// test script // 

function testreverseLetters() {
    const str1 = "kkaboom";
    const expected1 = "moobakk";
    const duplicates1 = reverseLetters(str1);
    console.log("Test 1 - Expected:", expected1);
    console.log("Test 1 - Result:", duplicates1);
    console.log("Test 1 - Pass:", JSON.stringify(duplicates1) === JSON.stringify(expected1));

    const str2 = "Hello world!";
    const expected2 = "!dlrow olleH";
    const result2 = reverseLetters(str2);
    console.log("Test 2 - Expected:", expected2);
    console.log("Test 2 - Result:", result2);
    console.log("Test 2 - Pass:", result2 === expected2);

}
testreverseLetters()