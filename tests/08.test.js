const isAPalindrome = require('../modules/08.js');

describe('isAPalindrome', () => {
  it('should return true if the string is a palindrome', () => {
    const str = "A man, a plan, a canal: Panama";
    const result = isAPalindrome(str);
    expect(result).toEqual("It's a palindrome.");
  });

  it('should return false if the string is not a palindrome', () => {
    const str = "Hello, World!";
    const result = isAPalindrome(str);
    expect(result).toEqual("It's not a palindrome.");
  });

  it('should ignore case and non-alphanumeric characters', () => {
    const str = "Race-car";
    const result = isAPalindrome(str);
    expect(result).toEqual("It's a palindrome.");
  });

  it('should return true for an empty string', () => {
    const str = "";
    const result = isAPalindrome(str);
    expect(result).toEqual("It's a palindrome.");
  });

});
