/*
Remove duplicate characters from the string
*/

function removeDuplicateCharacters(str) {
    const characters = str.split("");
    const singleChar = characters.filter((char, index) => {
      return characters.indexOf(char) === index;
    });
    const result = singleChar.join("");
    return result;
  };
  
  const str = "This is okey?";
  const stringWithoutDuplicates = removeDuplicateCharacters(str);
  console.log(stringWithoutDuplicates);


  // test script via jest

  describe('removeDuplicateCharacters', () => {
    it('should remove duplicate characters from a string', () => {
      const str = 'This is okey?';
      const expected = 'This okey?';
      
      const result = removeDuplicateCharacters(str);
      
      expect(result).toEqual(expected);
    });
  });