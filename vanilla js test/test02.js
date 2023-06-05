/* Find the 1st non-repeated character in the string */


function findFirstNonRepeatedChar(str) {
    const charCount = {};
    for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
    const showSingle = {};
    for (let char in charCount) {
      if (charCount[char] === 1) {
        showSingle[char] = charCount[char];
      }
    }
    const showFirst = Object.entries(showSingle)[0];
    return showFirst ? showFirst[0] : null;
  }
  
//   const str = "kkaboom";
//   console.log(findFirstNonRepeatedChar(str));
  
// test script

function testfindFirstNonRepeatedChar() {
    const str1 = "kkaboom";
    const expected1 = "a";
    const duplicates1 = findFirstNonRepeatedChar(str1);
    console.log("Test 1 - Expected:", expected1);
    console.log("Test 1 - Result:", duplicates1);
    console.log("Test 1 - Pass:", JSON.stringify(duplicates1) === JSON.stringify(expected1));

    const str2 = "aaa";
    const expected2 = null;
    const result2 = findFirstNonRepeatedChar(str2);
    console.log("Test 2 - Expected:", expected2);
    console.log("Test 2 - Result:", result2);
    console.log("Test 2 - Pass:", result2 === expected2);

}
testfindFirstNonRepeatedChar()