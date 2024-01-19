const asyncFn =async() =>{
    console.log("here I come SECOND and wait till the await returns response")
    return await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("yes")
        },3000)
    })
//this entire block will be paused untill it return result

}
async function waitTillApGivesResponse(){
    console.log("here I come FIRST")
    try{
    let resp = await asyncFn() // since I added await no further line of code gets executed here after untill respnse recived
    console.log("here I come FOURTH only if promise resolved till after receing respozne from asynfn, without Asycn in previous statement I get executed instantly")
    }catch(err){
        console.log("here I come FOURTH only if promise rejected till after receing respozne from asynfn")
    }
    console.log("I will get executed after await response")

}
waitTillApGivesResponse()
console.log("here I come THIRD")
//for async await error handling can be done using try catch