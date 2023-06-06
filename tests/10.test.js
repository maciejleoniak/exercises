const removeCharFromString = require('../modules/10.js');

describe('removeCharFromString', () => {
  it('should remove the given character from the string', () => {
    const str = 'abba';
    const char = 'a';
    const result = removeCharFromString(str, char);
    expect(result).toEqual('bb');
  });

  it('should not modify the string if the given character is not present', () => {
    const str = 'hello';
    const char = 'z';
    const result = removeCharFromString(str, char);
    expect(result).toEqual('hello');
  });

  it('should remove all occurrences of the given character', () => {
    const str = 'banana';
    const char = 'a';
    const result = removeCharFromString(str, char);
    expect(result).toEqual('bnn');
  });

  it('should remove the given character even if it appears consecutively', () => {
    const str = 'mississippi';
    const char = 's';
    const result = removeCharFromString(str, char);
    expect(result).toEqual('miiippi');
  });

});