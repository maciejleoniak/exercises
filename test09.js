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


  // test script 