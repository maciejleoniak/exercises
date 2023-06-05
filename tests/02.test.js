const findFirstNonRepeatedChar = require('../module/02.js');


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
