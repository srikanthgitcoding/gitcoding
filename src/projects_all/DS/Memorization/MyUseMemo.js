function Parent(){
    const count = 12

    function myUseMemo(callback){
        const cache ={}
      
        return (number)=>{
            console.log(cache[number])
            if(!cache[number]){
                cache[number] = callback(number)

           }
           return cache[number]
        }

    }

    function logicFunction (n){
        let r = 1
        for(let i=1;i<n;i++){
            r+=1
        }
        return r
    }
    const useMemocall = myUseMemo(logicFunction)
   console.log("retrun ", useMemocall(2000000000))
   console.log("retrun ", useMemocall(2000000000))
   console.log("retrun ", useMemocall(2000000000))
   console.log("retrun ", useMemocall(2000000000))

}
Parent()
