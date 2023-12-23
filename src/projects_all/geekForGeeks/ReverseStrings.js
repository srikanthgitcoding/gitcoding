function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString('Hello'));
  console.log("srikanth".split("")) // split converts string to array = ["s","r","i","k","a","n","t","h"]
  console.log("srikanth".split("").reverse()) // split reverse converts array in reverse= ["h","t","n","a","k","i","r","s"]
  console.log("srikanth".split("").reverse().join("")) // srikanth


  var words ="srikanth How are u doing"

var arr = [1,2,3,4]
arr.splice(0,arr.length)
  console.log(arr.length)