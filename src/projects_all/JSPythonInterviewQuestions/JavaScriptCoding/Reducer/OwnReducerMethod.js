var arr = [
    {subject:"physics",marks:50,studentName:"srikanth"},
    {subject:"chemistry",marks:60,studentName:"manisha"},
    {subject:"chemistry1",marks:55,studentName:"manisha22"},
    {subject:"maths",marks:90,studentName:"mani"}
]

function myOwnReducer(prevVale,currentValue){
    console.log(prevVale,currentValue)
    }
    
arr.myOwnReducer(myOwnReducer,0)


Array.prototype.