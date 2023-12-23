function findMissingNumber(arr) {
    const n = arr.length + 1;
    const sum = (n * (n + 1)) / 2;
    console.log(sum)
    const arrSum = arr.reduce((acc, curr) => acc + curr, 0);
    console.log(arrSum)
    return sum - arrSum;
  }
  
  console.log(findMissingNumber([1, 2, 4,3, 5,7]));

   //- (n * (n+1))/2