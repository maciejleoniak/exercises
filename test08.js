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

// const str1="work";
// console.log(isAPalindrome(str1));
// const str2="abBa";
// console.log(isAPalindrome(str2));

// test script 

function testIsAPalindrome() {
  // Test Case 1: Palindrome word
  const word1 = "level";
  const expectedResult1 = "It's a palindrome.";
  const result1 = isAPalindrome(word1);
  if (result1 === expectedResult1) {
    console.log("Test Case 1 Passed");
  } else {
    console.log("Test Case 1 Failed");
  }

  // Test Case 2: Non-palindrome word
  const word2 = "hello";
  const expectedResult2 = "It's not a palindrome.";
  const result2 = isAPalindrome(word2);
  if (result2 === expectedResult2) {
    console.log("Test Case 2 Passed");
  } else {
    console.log("Test Case 2 Failed");
  }

  // Test Case 3: Palindrome with special characters
  const word3 = "A man, a plan, a canal: Panama!";
  const expectedResult3 = "It's a palindrome.";
  const result3 = isAPalindrome(word3);
  if (result3 === expectedResult3) {
    console.log("Test Case 3 Passed");
  } else {
    console.log("Test Case 3 Failed");
  }


}


testIsAPalindrome();

