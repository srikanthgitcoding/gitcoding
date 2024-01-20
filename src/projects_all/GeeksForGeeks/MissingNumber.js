class Solution {
  missingNumber(array, n) {
    let i, total; // Declare variables to keep track of the loop index and the total sum.
    total = ((n + 1) * n) / 2; // Calculate the expected sum of numbers from 1 to n+1 using the formula.
    for (
      i = 0;
      i < n - 1;
      i++ // Iterate through the array.
    )
      console.log(total);

    total -= array[i]; // Subtract each element in the array from the total sum.
    return total; // Return the missing number by subtracting the sum of array elements from the expected sum.
  }
}
let n = 4;
