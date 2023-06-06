/*
Remove a given character from the string
*/
function removeCharFromString(str, char) {
  return str.split('').filter(function(element) {
    return element !== char;
  }).join('');
}

const str = 'abba';
const char = 'a';
console.log(str);
console.log(char);
console.log('removeCharFromString: ',removeCharFromString(str, char));

module.exports = removeCharFromString; 
