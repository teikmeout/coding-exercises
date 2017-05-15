// LINK: https://www.hackerrank.com/challenges/staircase?h_r=next-challenge&h_v=zen

// Consider a staircase of size n = 4:

//    #
//   ##
//  ###
// ####
// Observe that its base and height are both equal to ,
// and the image is drawn using # symbols and spaces.
// The last line is not preceded by any spaces.

// Write a program that prints a staircase of size n.

// Input Format
//A single integer denoting the size of the staircase.

// Output Format
// Print a staircase of size  using # symbols and spaces.

// Note: The last line must have no spaces in it.

// Sample Input

// 6
// Sample Output

//      #
//     ##
//    ###
//   ####
//  #####
// ######

let n = 6;

for (let i = 0; i < n; i++) {
  // console.log('line number ->', i+1);
  let str = '';
  for(let j = 0; j < n; j++) {
    // console.log('how many spaces -> ', n-j-1);
    // we have to insert as many # as the line we are on
    // index 0 is line 1 (i+1)
    // so we inser spaces until n-(i+1)
    if(j < n-(i+1)) {
      // insert a space
      str += ' ';
    } else str+= '#';
  }
  console.log(str);
}
