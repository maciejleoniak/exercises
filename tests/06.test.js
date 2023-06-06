const countOccurrencesOfTheCharInStr = require('../modules/06.js');

describe('countOccurrencesOfTheCharInStr', () => {
  it('should return the correct count of occurrences of a character in a string (case-insensitive)', () => {
    const char = 'a';
    const str = 'Abracadabra';
    const result = countOccurrencesOfTheCharInStr(char, str);
    expect(result).toEqual(5);
  });

  it('should return 0 if the character does not occur in the string', () => {
    const char = 'z';
    const str = 'Abracadabra';
    const result = countOccurrencesOfTheCharInStr(char, str);
    expect(result).toEqual(0);
  });

});