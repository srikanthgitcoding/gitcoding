var longestSubstring = function(s) {
    let i = 0;
    let j= 0;
    let subSTring = ""
    let longestSuvstringLength = 0
    while(j < s.length){

        let char = s[j]
        let charIndex = subSTring.indexOf(char)
        
        if(charIndex== -1){
            subSTring += char
        }else{
            longestSuvstringLength = subSTring.length > longestSuvstringLength ? subSTring.length :longestSuvstringLength  
            subSTring = subSTring.slice(charIndex+1) + "" + char
        }
        j++
        
    }
    return longestSuvstringLength
    
}; 
var  str = "pwwkew".toLowerCase()

console.log(longestSubstring(str))

//string.substr(start, length)
// length - The number of characters to extract. If omitted, it extracts the rest of the string

//const string = "foo";
// const substring = "oo";
// console.log(string.includes(substring)); // true or false