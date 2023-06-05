// const findFirstNonRepeatedChar = require('./02.js');

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

describe('findFirstNonRepeatedChar', () => {
  it('should return the first non-repeated character in the string', () => {
    const str1 = 'kkaboom';
    const expected1 = 'a';
    const result1 = findFirstNonRepeatedChar(str1);
    expect(result1).toEqual(expected1);

    const str2 = 'aaa';
    const expected2 = null;
    const result2 = findFirstNonRepeatedChar(str2);
    expect(result2).toEqual(expected2);
  });
});
