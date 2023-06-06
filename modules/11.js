/*
Find the characters with the most appearances
*/

function characterWithTheMostApperances(str) { 
    const charCount = {}; 
    let maxCount=0;
    for (let char of str) { /* (let char of str){... = (let i = 0; i < str.length; i++) {
        const char = str[i]; ... */ 
      charCount[char] = (charCount[char] || 0) + 1; 
      if (charCount[char]>maxCount){
        maxCount = charCount[char];
      };
    };
    const charMaxCount = [];
    for (let char in charCount) {
      if (charCount[char] === maxCount) {
        charMaxCount.push(char);
      };
    };
    return charMaxCount;
  };

const str = "Characters with the most appearances";
console.log(characterWithTheMostApperances(str))

module.exports = characterWithTheMostApperances; 
