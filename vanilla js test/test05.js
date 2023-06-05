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

// test script - basics of assert


const assert = require('assert');

function testCountNumOfVowelsAndConsonants() {
  const string1 = 'nice hacky';
  const vowelsCount = countNumOfVowels(string1);
  const consonantsCount = countNumOfConsonants(string1);

  assert.strictEqual(vowelsCount, 3, 'Incorrect number of vowels');
  assert.strictEqual(consonantsCount, 6, 'Incorrect number of consonants');
}

testCountNumOfVowelsAndConsonants();