const containsOnlyDigits = require('../modules/04.js');

describe('containsOnlyDigits', () => {
  it('should return true if the string contains only digits', () => {
    const str = "7799043";
    expect(containsOnlyDigits(str)).toBe(true);
  });

  it('should return false if the string contains non-digit characters', () => {
    const str = "123abc456";
    expect(containsOnlyDigits(str)).toBe(false);
  });

  it('should return false if the string is empty', () => {
    const str = "";
    expect(containsOnlyDigits(str)).toBe(false);
  });

});
