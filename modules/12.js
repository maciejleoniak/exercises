/*
Find the longest common prefix for an array of strings 
*/

function longestCommonPrefix(str) {
    if (str.length === 0) {
      return '';
    };
  
    let prefix = '';
    const firstString = str[0];
  
    for (let i = 0; i < firstString.length; i++) {
      const char = firstString[i];
  
      for (let j = 1; j < str.length; j++) {
        if (str[j][i] !== char) {
          return prefix;
        };
      };
  
      prefix += char;
    };
  
    return prefix;
  };
  
  const str = ['home', 'homeland', 'homless'];
  console.log(str);
  console.log('longestCommonPrefix: ',longestCommonPrefix(str));

  module.exports = longestCommonPrefix; 
