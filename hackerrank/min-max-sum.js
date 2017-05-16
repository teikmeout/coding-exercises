// // Mini-Max Sum
// Given five positive integers, find the minimum and maximum values
// that can be calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line
// of two space-separated long integers.

// Input Format

// A single line of five space-separated integers.

// Constraints

// Each integer is in the inclusive range .
// Output Format

// Print two space-separated long integers denoting the respective minimum
// and maximum values that can be calculated by summing exactly four
// of the five integers. (The output can be greater than 32 bit integer.)

// Sample Input
// 1 2 3 4 5

// Sample Output
// 10 14

// Explanation

// Our initial numbers are 1,2 ,3 ,4 ,5 and . We can calculate the
// following sums using four of the five integers:

// If we sum everything except 1, our sum is 2+3+4+5 = 14
// If we sum everything except 2, our sum is 1+3+4+5 = 13
// If we sum everything except 3, our sum is 1+2+4+5 = 12
// If we sum everything except 4, our sum is 1+2+3+5 = 11
// If we sum everything except 5, our sum is 1+2+3+4 = 10
// As you can see, the minimal sum is  and the maximal sum is:
// 1+2+3+4 = 10
// And the maximum sum is 2+3+4+5 = 14
// Thus, we print these minimal and maximal sums as two space-separated integers
// on a new line.

// Hints: Beware of integer overflow! Use 64-bit Integer.
let arr = [5,2,4,3,1];
function checkSums(arr) {
  // order the array
  arr.sort();
  // declare catchers
  let highsum = 0;
  let lowsum = 0;

  // walk the array
  for (let i = 0; i < arr.length; i++) {
    // for lowsum
    if(i < arr.length-1) {
      console.log(`index lower than ${arr.length} ->`, i);
      lowsum += arr[i];
      console.log('high sum acummed -> ',highsum);
    }
    if (i !== 0) {
      console.log(`index not 0 ->`, i);
      highsum += arr[i];
      console.log("lowsum", lowsum);
    }
  }

  // lowest sum leaves the highest number out
  console.log('high sum-> ',highsum);
  console.log('low sum-> ',lowsum);


}
checkSums(arr);

