setTimeout(() => {
    console.log("I am calleed")
}, 100);


setTimeout(function(){},100)

const callMe =(a)=>{
    console.log("I am called",a)
}

setTimeout(callMe,200)