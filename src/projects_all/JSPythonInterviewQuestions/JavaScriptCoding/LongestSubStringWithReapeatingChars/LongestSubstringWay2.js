function longestSub(s){
let maxLength = 0
let i = 0;
let charIndexMap ={}
let j= 0
while(j<s.length){
    if(charIndexMap[s[j]]>=i){
        i = charIndexMap[s[j]] + 1
    }
    
    charIndexMap[s[j]] = j
    maxLength = Math.max(maxLength,j-i+1)
    j++
}
return maxLength
}


const input = "abcdacbb"
const result = longestSub(input)
console.log(result)


// undefined  > 0 = false
// undefined  >= 0 = false