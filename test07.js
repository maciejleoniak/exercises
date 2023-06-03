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