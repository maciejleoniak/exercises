const countDuplicateChars = require('./modules/01.js');
const findFirstNonRepeatedChar = require('./modules/02.js');
const reverseLetters = require('./modules/03.js');
const containsOnlyDigits = require('./modules/04.js');
const countVowelsAndConsonants = require('./modules/05.js');
const countOccurrencesOfTheCharInStr = require('./modules/06.js');
const generateAllPermutations = require('./modules/07.js');
const isAPalindrome = require('./modules/08.js');
const removeDuplicateCharacters = require('./modules/09.js');
const removeCharFromString = require('./modules/10.js');
const characterWithTheMostApperances = require('./modules/11.js');
const longestCommonPrefix = require('./modules/12.js');

// set up to execute exercises
const str = "Never odd or even."
// set up to execute exercises

// set up to 06 & 11 exercises: countOccurrencesOfTheCharInS
const char = 'a';
// set up to 06 & 11 exercises: countOccurrencesOfTheCharInS 

// set up for 07 exercises: generateAllPermutations
const per= 'ups';
// set up for 07 exercises: generateAllPermutations

console.log(str);

const result01 = countDuplicateChars(str);
const result02 = findFirstNonRepeatedChar(str);
const result03 = reverseLetters(str);
const result04 = containsOnlyDigits(str);
const result05 = countVowelsAndConsonants(str);
const result06 = countOccurrencesOfTheCharInStr(char, str);
const result07 = generateAllPermutations(per);
const result08 = isAPalindrome(str);
const result09 = removeDuplicateCharacters(str);
const result10 = removeCharFromString(str, char);
const result11 = characterWithTheMostApperances(str);
const result12 = longestCommonPrefix(str);

console.log('countDuplicateChars:', result01);
console.log('findFirstNonRepeatedChar:', result02);
console.log('reverseLetters:', result03);
console.log('containsOnlyDigits:', result04);
console.log('countVowelsAndConsonants:', result05);
console.log('countOccurrencesOfTheCharInStr', result06);
console.log('generateAllPermutations:', result07);
console.log('isAPalindrome:', result08);
console.log('removeDuplicateCharacters:', result09);
console.log('removeCharFromString:', result10);
console.log('characterWithTheMostApperances:', result11);
console.log('longestCommonPrefix:', result12);