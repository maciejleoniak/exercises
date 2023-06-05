const countDuplicateChars = require('../modules/01.js');

describe('countDuplicateChars', () => {
  it('should count duplicate characters correctly', () => {
    const input = 'aabbcdd';
    const expectedOutput = {
      'a': 2,
      'b': 2,
      'd': 2
    };
    expect(countDuplicateChars(input)).toEqual(expectedOutput);
  });

  it('should handle empty string', () => {
    const input = '';
    const expectedOutput = {};
    expect(countDuplicateChars(input)).toEqual(expectedOutput);
  });

  it('should handle string with no duplicates', () => {
    const input = 'abcdefg';
    const expectedOutput = {};
    expect(countDuplicateChars(input)).toEqual(expectedOutput);
  });

  it('should count uppercase and lowercase characters total', () => {
    const input = 'aAAbBcCdD';
    const expectedOutput = {
      'a': 3,
      'b': 2,
      'c': 2,
      'd': 2
    };
    expect(countDuplicateChars(input)).toEqual(expectedOutput);
  });
});
