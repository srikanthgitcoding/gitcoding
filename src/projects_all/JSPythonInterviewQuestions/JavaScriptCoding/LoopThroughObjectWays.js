let dict = {
    a : "srikanth", 
    b :"mothkuri"
 }
var getLengthOfObject = Object.keys(dict).length
 //1
 for (var i=0; i < getLengthOfObject; i++){
     console.log(dict[Object.keys(dict)[i]]) 
 }

//2
 for(key in dict){
    console.log("in operator",key)
 }

 //For-of with Object.keys() alternative:
//3
 for (var key of Object.keys(dict)) {
    console.log(key + " -> " + dict[key])
}