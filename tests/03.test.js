const reverseLetters = require('../modules/03.js');

describe('reverseLetters', () => {
  it('should reverse the letters in a string', () => {
    const str = "entry to palindrome checker";
    const reversedStr = reverseLetters(str);
    expect(reversedStr).toEqual("rekcehc emordnilap ot yrtne");
  });

  it('should return an empty string if given an empty string', () => {
    const str = "";
    const reversedStr = reverseLetters(str);
    expect(reversedStr).toEqual("");
  });

  it('should reverse a string containing only one character', () => {
    const str = "a";
    const reversedStr = reverseLetters(str);
    expect(reversedStr).toEqual("a");
  });

});
