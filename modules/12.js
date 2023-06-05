/*
Find the longest common prefix for an array of strings 
*/

function longestCommonPrefix(strings) {
    if (strings.length === 0) {
      return '';
    };
  
    let prefix = '';
    const firstString = strings[0];
  
    for (let i = 0; i < firstString.length; i++) {
      const char = firstString[i];
  
      for (let j = 1; j < strings.length; j++) {
        if (strings[j][i] !== char) {
          return prefix;
        };
      };
  
      prefix += char;
    };
  
    return prefix;
  };
  
  const strings = ['home', 'homeland', 'homless'];
  const commonPrefix = longestCommonPrefix(strings);
  console.log(commonPrefix);