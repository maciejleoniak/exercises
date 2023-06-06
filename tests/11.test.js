const characterWithTheMostApperances = require('../modules/11.js');

describe('characterWithTheMostApperances', () => {
  it('should return the character(s) with the most appearances in the string', () => {
    const str = "Hello, world!";
    const result = characterWithTheMostApperances(str);
    expect(result).toEqual(['l', 'o']);
  });

  it('should return an empty array if the string is empty', () => {
    const str = "";
    const result = characterWithTheMostApperances(str);
    expect(result).toEqual([]);
  });

  it('should handle multiple characters with the same maximum count', () => {
    const str = "abbccc";
    const result = characterWithTheMostApperances(str);
    expect(result).toEqual(['c']);
  });

  it('should handle case sensitivity', () => {
    const str = "AaBBcc";
    const result = characterWithTheMostApperances(str);
    expect(result).toEqual(['B', 'c']);
  });

});

