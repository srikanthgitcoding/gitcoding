function maxSubArray(arr, n) {
  let maxSum = 0;
  let tempSum = 0;
  if (n > arrSize) {
    return null;
  }
  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
  }
  maxSum = tempSum;
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    Math.max(maxSum, tempSum);
  }
}

const arr = [1, 2, 3, 9, 8, 4, 1, 2, 3];

maxSubArray(arr, 3);
