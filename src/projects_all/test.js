function fn(arr, target) {
  var min_value = arr[0];
  let result = -1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      result = i;
      break;
    }
  }
  return result;
}
var arr = [5, 6, 1, 2, 3, 4];
console.log(fn(arr, 16));
