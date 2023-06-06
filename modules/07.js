/*
Generate all permutations for the string
*/

function generateAllPermutations(per) {
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

  permute('', per);
  return permutations;
};

const per = 'ups';
console.log(per);
console.log('generateAllPermutations:',generateAllPermutations(per));

module.exports = generateAllPermutations;