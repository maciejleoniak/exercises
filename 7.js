/*
Generate all permutations for the string
*/

function generateAllPermutations (str){
};
   
   



function silnia(n) {
        if (n < 0) {
          return NaN;
        }
        let factorial = 1;
        for (let i = 2; i <= n; i++) {
          factorial *= i;
        }
        return factorial;
};

const n = 3;
const factorial = silnia(n);
console.log(factorial);