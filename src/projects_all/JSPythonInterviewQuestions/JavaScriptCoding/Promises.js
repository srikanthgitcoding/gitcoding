const fn = () =>{
    return new Promise((resolve,reject) =>{
        let a = 2

        if (a ==2){
            resolve("succes")
        }else{
            reject("fail")
        }
    })
}


fn().then((msg) => {
    console.log("success", msg)
}).catch((msg) => {
    console.log("0----", msg)
})
