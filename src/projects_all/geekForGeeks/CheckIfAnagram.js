function Anargram(word1,word2){
    let w1 = word1.toLowerCase().split("")
    let w2 = word2.toLowerCase().split("")
    if(w1.length !== w2.length) return false
    let isAnagram = true
    for(i of w1){
        if(w2.indexOf(i) == -1){
            isAnagram = false
            break;
        }
    }
    return isAnagram
}

console.log(Anargram("sri","isr"))