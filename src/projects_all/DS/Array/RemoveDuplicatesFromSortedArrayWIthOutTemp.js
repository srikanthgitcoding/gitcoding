function arrayaa(arr, n) {
  let j = 0;
  for (var i = 0; i < n - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      arr[j] = arr[i];
      j++;
    }
  }
  arr[j] = arr[i];
  data =  arr.slice(0,j+1)
  return data
}

var arr = [0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(arrayaa(arr, arr.length))
