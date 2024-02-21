function minSubArray(arr, n) {
  let temp = 0
  let minsum = 0

  for (let i = 0; i < n; i++) {
    temp += arr[i];
  }
  minsum = temp;
  for (let i = n; i < arr.length; i++) {
    temp = temp - arr[i - n] + arr[i];
    minsum = Math.min(temp, minsum);
  }
  return minsum;
}
const arr = [1, 2, 8, 5, 6, 7, 2, 4, 1,1,1];
console.log(minSubArray(arr, 3));
