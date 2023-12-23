function Palindrom(str){
    let reverseStr = "";
    for(i of str){
        reverseStr = i + reverseStr
    }
    return str === reverseStr
   
}

console.log(Palindrom("madam1"))

console.log(Math.sqrt(5))