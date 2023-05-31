/* Find the 1st non-repeated character in the string */


function findFirstNonRepeatedChar(str) {
  const charCount = {};
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  const showSingle = {};
  for (let char in charCount) {
    if (charCount[char] === 1) {
      showSingle[char] = charCount[char];
    }
  }
  const showFirst = Object.entries(showSingle)[0];
  return showFirst ? showFirst[0] : null;
}

const str = "kkaboom";
console.log(findFirstNonRepeatedChar(str));


