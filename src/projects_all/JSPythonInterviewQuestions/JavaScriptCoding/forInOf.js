let list = [4, 5, 6];
let dict = {
   a : "srikanth", 
   b :"mothkuri"
}

for (let i in list) {
   console.log(i); // "0", "1", "2",
}

for (let i of list) {
   console.log(i); // "4", "5", "6"
}

for (var k in dict){
   console.log(k,[k])
}