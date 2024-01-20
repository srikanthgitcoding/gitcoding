function sort012(arr, N){
  //your code here
  var zeros = [],
    ones = [],
    twos = [];
  for (let i of arr) {
    if (i == 0) {
      zeros.push(i);
    } else if (i == 1) {
      ones.push(i);
    } else if (i == 2) {
      twos.push(i);
    }
  }
  return [...zeros, ...ones, ...twos];
}

console.log(sort012([0,1,2,0,0,0,1,1,1,2,2,2]))