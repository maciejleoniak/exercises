const generateAllPermutations = require('../modules/07.js');

describe('generateAllPermutations', () => {
  it('should generate all permutations for the given string', () => {
    const per = 'ups';
    const result = generateAllPermutations(per);
    const expected = ['ups', 'usp', 'pus', 'psu', 'sup', 'spu'];
    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result.length).toEqual(expected.length);
  });

  it('should generate an empty array if the input string is empty', () => {
    const per = '';
    const result = generateAllPermutations(per);
    expect(result).toEqual([]);
  });

  it('should generate a single permutation if the input string has only one character', () => {
    const per = 'a';
    const result = generateAllPermutations(per);
    expect(result).toEqual(['a']);
  });

});

