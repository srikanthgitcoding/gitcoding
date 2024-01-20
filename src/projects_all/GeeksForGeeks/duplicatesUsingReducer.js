function dup(a, n) {
  
  var duplicates = [];
  a.reduce((accumulator,currentValue),{
    const acc = accumulator[currentValue] ? accumulator[currentValue]
  },{})

  return duplicates;
}
var arr = [1, 2, 2, 3,3, 4, 4];
console.log(dup(arr, arr.length));
