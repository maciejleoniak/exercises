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
