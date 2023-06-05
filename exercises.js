const countDuplicateChars = require('./modules/01.js');
const findFirstNonRepeatedChar = require('./modules/02.js');

const str = 'Hello, World!';
console.log(str);


const result01 = countDuplicateChars(str);


const result02 = findFirstNonRepeatedChar(str);

console.log('countDuplicateChars:', result01);
console.log('findFirstNonRepeatedChar:', result02);