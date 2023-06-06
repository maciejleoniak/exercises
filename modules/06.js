/* 
Count the occurrences of the character in a string. The method has 2 params character and word
*/

function countOccurrencesOfTheCharInStr(char, str){
    char = char.toLowerCase();
    str = str.toLowerCase();
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (str.charAt(i) === char) {
            count++;
        };
    };
    return count;
};

// const char = "a";
// const str = "ABC ABC";
// console.log(countOccurrencesOfTheCharInStr(char, str));

module.exports = countOccurrencesOfTheCharInStr;