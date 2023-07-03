n = 123
s = n+""
rev = ''
for (let i=0;i<s.length;i++){
    rev = s[i] + rev
}

console.log(rev)