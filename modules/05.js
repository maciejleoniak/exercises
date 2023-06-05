/*
Count the number of vowels and consonants in the string
*/
function countNumOfVowels(str) {
    const vowels = str.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
  }
  
  function countNumOfConsonants(str) {
    const consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/gi);
    return consonants ? consonants.length : 0;
  }
  
  const string1 = "nice hacky";
  console.log(
    "Number of vowels:",
    countNumOfVowels(string1),
    "Number of consonants:",
    countNumOfConsonants(string1)
  );