const longestCommonPrefix = require('../modules/12.js');

describe('longestCommonPrefix', () => {
  it('should return the longest common prefix for an array of strings', () => {
    const str = ['home', 'homeland', 'homless'];
    const result = longestCommonPrefix(str);
    expect(result).toEqual('hom');
  });

  it('should return an empty string if the array is empty', () => {
    const str = [];
    const result = longestCommonPrefix(str);
    expect(result).toEqual('');
  });

  it('should handle an array with a single string', () => {
    const str = ['hello'];
    const result = longestCommonPrefix(str);
    expect(result).toEqual('hello');
  });

  it('should return an empty string if there is no common prefix', () => {
    const str = ['apple', 'banana', 'cherry'];
    const result = longestCommonPrefix(str);
    expect(result).toEqual('');
  });

});
