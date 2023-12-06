//4. Grouping objects by a property

const result = [
    {subject: 'Physics', marks: 41},
    {subject: 'Chemistry', marks: 59},
    {subject: 'Pure Maths', marks: 36},
    {subject: 'Applied Maths', marks: 90},
    {subject: 'English', marks: 64},
];

let initialValue = {
    pass: [], 
    fail: []
}
const r = result.reduce((accumualtor,curr)=>{
        console.log(accumualtor);
        (curr.marks) > 50 ? accumualtor.pass.push(curr) : accumualtor.fail.push(curr);
        return accumualtor
    },initialValue)


// console.log(r)    


// result.forEach((current,index)=>{
//    current.marks > 50 ? initialValue.pass.push(current) : initialValue.fail.push(current)
// })


// normal solution 


// solution usinf resucer 