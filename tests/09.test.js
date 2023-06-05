const removeDuplicateCharacters = require('../module/09.js');

  describe('removeDuplicateCharacters', () => {
    it('should remove duplicate characters from a string', () => {
      const str = 'This is okey?';
      const expected = 'This okey?';
      
      const result = removeDuplicateCharacters(str);
      
      expect(result).toEqual(expected);
    });
  });