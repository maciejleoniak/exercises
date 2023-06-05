/*
Count the number of vowels and consonants in the string
*/
function countVowelsAndConsonants(str) {
  const vowels = str.match(/[aeiou]/gi);
  const consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/gi);
  const vowelCount = vowels ? vowels.length : 0;
  const consonantCount = consonants ? consonants.length : 0;
  
  return {
    vowels: vowelCount,
    consonants: consonantCount
  };
}

// const str = "nice hacky";

// console.log(countVowelsAndConsonants(str));



  module.exports = countVowelsAndConsonants;