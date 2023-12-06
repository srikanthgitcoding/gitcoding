var arr = [
    {subject:"physics",marks:50,studentName:"srikanth"},
    {subject:"chemistry",marks:60,studentName:"manisha"},
    {subject:"chemistry1",marks:55,studentName:"manisha22"},
    {subject:"maths",marks:90,studentName:"mani"}
]

var str = "Counting Occurrences of Items in Array"
console.log(str.split(" ").join("")+".js")

var max = arr.reduce((accumulator,currentValue)=>{
    if(accumulator == null || currentValue.marks < accumulator){
        return currentValue.marks
    }
    return accumulator
},null)
console.log(max)





