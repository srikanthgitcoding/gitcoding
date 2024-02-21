var str = "i am srikanth convert me likt this"
var str1 = "i am sGGikanth convert me likt this"
var str2 = "i am srikanth cHnvert me likt this"
var str3 = "i'am JJJJJJanth convert me likt this"


// capitalize first character


console.log(str.toLocaleLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "))