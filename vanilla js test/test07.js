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
  
//   const inputString = 'ups';
//   const result = generateAllPermutations(inputString);
//   console.log(result);

// test script 



function testGenerateAllPermutations() {

    // Test Case 1
    const inputString1 = 'abc';
    const expectedPermutations1 = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'];
    const result1 = generateAllPermutations(inputString1);
    console.log("Test 1 - Expected:", expectedPermutations1);
    console.log("Test 1 - Result:", result1);
    console.log("Test 1 - Pass:", JSON.stringify(expectedPermutations1) === JSON.stringify(result1));
  
    // Test Case 2
    const inputString2 = 'xyz';
    const expectedPermutations2 = ['xyz', 'xzy', 'yxz', 'yzx', 'zxy', 'zyx'];
    const result2 = generateAllPermutations(inputString2);
    console.log("Test 2 - Expected:", expectedPermutations2);
    console.log("Test 2 - Result:", result2);
    console.log("Test 2 - Pass:", JSON.stringify(expectedPermutations2) === JSON.stringify(result2));
    
  }
  
  
  testGenerateAllPermutations();