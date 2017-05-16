// Given a square matrix of N size ,
// calculate the absolute difference between the sums of its diagonals.

// Input Format:
// The first line contains a single integer, .
// The next  lines denote the matrix's rows, with each line containing
// space-separated integers describing the columns.

// Constraints
// -100 < N < 100

// Output Format
// Print the absolute difference between the two sums of the matrix's diagonals as a single integer.

// Sample Input
// 3
// 11 2 4
// 4 5 6
// 10 8 -12

// Sample Output
// 15

// Explanation
// Sum across the primary diagonal: 11 + 5 - 12 = 4
// Sum across the secondary diagonal: 4 + 5 + 10 = 19
// Difference: |4 - 19| = 15
let n = 3;
let arrr = [[11,2,4],[4,5,6],[10,8,-12]];
console.log(arrr);
let acum = 0;
let acum2 = 0;
// declaring two indexes one on 0, one on length-1
// and one on length-1, walking them inverse
for (let j = n-1, a = 0; j >= 0; j--, a++)  {
  // console.log(a);
  // console.log('left diagonal -> ', arrr[j][j]);
  acum += arrr[j][j];
  // console.log('right diagonal ->', arrr[a][j]);
  acum2 += arrr[a][j];
}
console.log(Math.abs(acum-acum2));


