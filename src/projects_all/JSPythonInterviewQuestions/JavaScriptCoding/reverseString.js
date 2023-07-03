var s = "srikanth"
len = s.length
rev =''

// for(let i=0; i< len; i++){
//     rev = s[i] + rev
// }
for(i of s){
    rev = i + rev
}
console.log(rev)