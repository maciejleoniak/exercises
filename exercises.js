const countDuplicateChars = require('./modules/01.js');
const findFirstNonRepeatedChar = require('./modules/02.js');
const reverseLetters = require('./modules/03.js');
const containsOnlyDigits = require('./modules/04.js');
const countVowelsAndConsonants = require('./modules/05.js');

const str = 'Hello, World!';
console.log(str);


const result01 = countDuplicateChars(str);
const result02 = findFirstNonRepeatedChar(str);
const result03 = reverseLetters(str);
const result04 = containsOnlyDigits(str);
const result05 = countVowelsAndConsonants(str);
const result06 = (str);

console.log('countDuplicateChars:', result01);
console.log('findFirstNonRepeatedChar:', result02);
console.log('reverseLetters:', result03);
console.log('containsOnlyDigits:', result04);
console.log('countVowelsAndConsonants:', result05);
// console.log('.:', result06);