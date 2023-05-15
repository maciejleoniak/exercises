/* Count the number of vowels and consonants in the string */

    function countNumOfVowels(str){
        const vowels = str.match(/[auioe]/gi);
        return vowels.length; 
    }
    function countNumOfConsonants(str){
        const consonants = str.match(/[a-z]/gi);
        return consonants.length; 
    }

const string1 = "nice hacky";
console.log("number of vovels:", countNumOfVowels(string1), "number of consonants:", countNumOfConsonants(string1)-countNumOfVowels(string1));
