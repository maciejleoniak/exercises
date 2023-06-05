/* 
Count the occurrences of the character in a string. The method has 2 params character and word
*/

function countOccurrencesOfTheCharInStr(character, word){
    character = character.toLowerCase();
    word = word.toLowerCase();
    let count = 0;
    for (let i = 0; i < word.length; i++){
        if (word.charAt(i) === character) {
            count++;
        };
    };
    return count;
};

const character = "a";
const word = "ABC ABC";
const result = countOccurrencesOfTheCharInStr(character, word);
console.log(result);

// test script 

function testCountOccurrencesOfTheCharInStr() {
    // Test case 1: Character "a" occurs twice in the word "ABC ABC"
    let result = countOccurrencesOfTheCharInStr('a', 'ABC ABC');
    console.log(result === 2 ? 'Test case 1 passed' : 'Test case 1 failed');
  
    // Test case 2: Character "b" occurs once in the word "ABC ABC"
    result = countOccurrencesOfTheCharInStr('b', 'ABC ABC');
    console.log(result === 1 ? 'Test case 2 passed' : 'Test case 2 failed');
  
    // Test case 3: Character "c" does not occur in the word "ABC ABC"
    result = countOccurrencesOfTheCharInStr('c', 'ABC ABC');
    console.log(result === 0 ? 'Test case 3 passed' : 'Test case 3 failed');
  }
  
  testCountOccurrencesOfTheCharInStr();