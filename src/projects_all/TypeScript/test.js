function WindowSlide(arr,k){
  let i = 0;
  let j =0;
  let sum = 0
  let max = 0
  
  while(j < arr.length){
      sum+=arr[j]
      if(j-i+1 === k){
          max = sum > max ? sum : max 
          sum-=arr[i]
          i++
      }
      j++
  }
  return max

}
// arr length = 5
// i = 1
// j = 3
// 30
//30
var arr = [10,20,30,40,50]

console.log(WindowSlide(arr,3))

