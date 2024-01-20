function MajjorityItem(a, n) {
  let obj = {};
  let highest = -1;
  let morethan = Math.floor(n / 2);
  for (i of a) {
    if (obj[i]) {
      obj[i] += 1;
      if (obj[i] > morethan) {
        highest = i;
      }
    } else {
      obj[i] = 1;
    }
  }
  return highest;
}

var arr = [3, 3, 2, 1, 1, 1,1,2,2,2,2,2,2,2];
console.log(MajjorityItem(arr, arr.length));
