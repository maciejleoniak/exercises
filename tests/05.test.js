const countVowelsAndConsonants = require('../modules/05.js');

describe('countVowelsAndConsonants', () => {
  it('should return the correct count of vowels and consonants in a string', () => {
    const str = "nice hacky";
    const result = countVowelsAndConsonants(str);
    expect(result.vowels).toEqual(4);
    expect(result.consonants).toEqual(6);
  });

  it('should return 0 for vowels and consonants if the string is empty', () => {
    const str = "";
    const result = countVowelsAndConsonants(str);
    expect(result.vowels).toEqual(0);
    expect(result.consonants).toEqual(0);
  });

  it('should handle case-insensitive counting', () => {
    const str = "AbCdEfG";
    const result = countVowelsAndConsonants(str);
    expect(result.vowels).toEqual(2);
    expect(result.consonants).toEqual(4);
  });

});
