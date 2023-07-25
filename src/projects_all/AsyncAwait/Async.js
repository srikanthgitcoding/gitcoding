const asyncFn =async() =>{
    return await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("yes")
            console.log("yes")
        },3000)
    })
//this entire block will be paused untill it return result

}
async function fn(){
    try{
    let resp = await asyncFn()
    console.log("resp")
    }catch(err){
console.log("error", err)
    }

}
fn()
console.log("after asycn fn")
//for async await error handling can be done using try catch