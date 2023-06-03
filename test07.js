/*
Generate all permutations for the string
*/

function generateAllPermutations(str) {
    const permutations = [];
  
    function permute(prefix, remaining) {
      if (remaining.length === 0) {
        permutations.push(prefix);
      } else {
        for (let i = 0; i < remaining.length; i++) {
          const newPrefix = prefix + remaining[i];
          const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
          permute(newPrefix, newRemaining);
        };
      };
    };
  
    permute('', str);
    return permutations;
  };
  
  const inputString = 'ups';
  const result = generateAllPermutations(inputString);
  console.log(result);

  // test script 
  
  const assert = require('assert');

  function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
  

function testGenerateAllPermutations() {

    // Test Case 1
    const inputString1 = 'abc';
    const expectedPermutations1 = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'];
    const result1 = generateAllPermutations(inputString1);
    assert(arraysEqual(result1, expectedPermutations1), 'Test Case 1 Failed');
  
    // Test Case 2
    const inputString2 = 'xyz';
    const expectedPermutations2 = ['xyz', 'xzy', 'yxz', 'yzx', 'zxy', 'zyx'];
    const result2 = generateAllPermutations(inputString2);
    assert(arraysEqual(result2, expectedPermutations2), 'Test Case 2 Failed');
  
    // Add more test cases as needed...
  }
  
  
  testGenerateAllPermutations();