/*
Remove a given character from the string
*/

function sentence(str) {
    return str.split('');
  }
  
  function deleteChar(array, char) {
    return array.filter(function(element) {
        return element !== char;
      });
  };

  const inputString = 'abba';
  const charToDelete = 'b';
  
  const splited = sentence(inputString);
  const toJoin = deleteChar(splited, charToDelete);
  
  const sentenceWithoutChar = toJoin.join('');
  
  console.log(sentenceWithoutChar);