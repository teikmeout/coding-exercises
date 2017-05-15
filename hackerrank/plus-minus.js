// LINK: https://www.hackerrank.com/challenges/plus-minus?h_r=next-challenge&h_v=zen

// Given an array of integers, calculate which fraction of its elements are positive,
// which fraction of its elements are negative,
// and which fraction of its elements are zeroes, respectively.
// Print the decimal value of each fraction on a new line.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

// Input Format

// The first line contains an integer, , denoting the size of the array.
// The second line contains  space-separated integers describing an array of numbers .

// Output Format

// You must print A decimal representing:

// the fraction of positive numbers in the array compared to its size.
// the fraction of negative numbers in the array compared to its size.
// the fraction of zeroes in the array compared to its size.

// Sample Input
// 6
// -4 3 -9 0 4 1

//Sample Output
// 0.500000
// 0.333333
// 0.166667

var numero = 1/3;
let n = 6;
let arrr = [-4, 3, -9, 0, 4, 1];
let pos = 0;
let neg = 0;
let zero = 0;

console.log(numero.toFixed(6));

for(let i = 0; i < n; i++) {
  if(arrr[i] > 0) {
    pos++;
  } else if(arrr[i] == 0) {
    zero++;
  } else neg++;
}
console.log('+ ', pos, ', - ', neg, ' 0 ', zero);
console.log((pos/n).toFixed(6));
console.log((neg/n).toFixed(6));
console.log((zero/n).toFixed(6));
