/*  Count duplicate characters in the string. Output can be a HashMap<String, Integer> or whatever container you like)  */ 

function countDuplicateChars(str) { 
  const charCount = {}; 
  for (let char of str) { 
    charCount[char] = (charCount[char] || 0) + 1; 
  }
  const duplicates = {};
  for (let char in charCount) {
    if (charCount[char] > 1) {
      duplicates[char] = charCount[char];
    }
  }
  return duplicates;
}

const str = "programming";
const duplicates = countDuplicateChars(str);
console.log(duplicates);

// test script

function testCountDuplicateChars() {
  const str1 = "programming";
  const expected1 = { 'r': 2, 'g': 2, 'm': 2 };
  const duplicates1 = countDuplicateChars(str1);
  console.log("Test 1 - Expected:", expected1);
  console.log("Test 1 - Result:", duplicates1);
  console.log("Test 1 - Pass:", JSON.stringify(duplicates1) === JSON.stringify(expected1));

  const str2 = "hello world";
  const expected2 = { 'l': 3, 'o': 2 };
  const duplicates2 = countDuplicateChars(str2);
  console.log("Test 2 - Expected:", expected2);
  console.log("Test 2 - Result:", duplicates2);
  console.log("Test 2 - Pass:", JSON.stringify(duplicates2) === JSON.stringify(expected2));

  const str3 = "abcdefg...???";
  const expected3 = {'.': 3, '?': 3};
  const duplicates3 = countDuplicateChars(str3);
  console.log("Test 3 - Expected:", expected3);
  console.log("Test 3 - Result:", duplicates3);
  console.log("Test 3 - Pass:", JSON.stringify(duplicates3) === JSON.stringify(expected3));
}

testCountDuplicateChars();
