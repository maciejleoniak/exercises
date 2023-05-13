/* Find the 1st non-repeated character in the string */


function findFirstNonRepeatedChar (str) {
    const charCount = {};
    for (let char of str){
        charCount[char] = ( charCount[char] || 0)+1;
    }
    const showSingle = {};
    for (let char in charCount) {
    if (charCount[char] <= 1) {
    showSingle[char] = charCount[char];
  }
}
return showSingle;
}

const str = "kaboom";
const showSingle = findFirstNonRepeatedChar(str);
console.log(showSingle);


