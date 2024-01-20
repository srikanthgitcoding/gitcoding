function Binary(arr, t, start, end) {
  if (arr.length == 0) {
    return -1;
  }
  if (arr.length == 1) {
    if (arr[0] == t) {
      return 0;
    }
    return -1;
  }

  let startIndex = start;
  let endIndex = end;

  let middleIndex = Math.floor((startIndex + endIndex) / 2);
  if (arr[middleIndex] === t) {
    return middleIndex;
  }

  if (arr[middleIndex] > t) {
    return Binary(arr, t, startIndex, middleIndex);
  } else {
    return Binary(arr, t, middleIndex + 1, endIndex);
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(Binary(arr, 2, 0, arr[arr.length - 1]));
