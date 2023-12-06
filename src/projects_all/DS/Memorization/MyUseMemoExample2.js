

function Parent(){
    const name = {firstName:""}


    function myUseMemo(callback){
        const cache = {firstName:""}
      
        return (val)=>{
            if(cache["firstName"] === val){
                console.log("cache")
                return cache
           }
           cache["firstName"] = callback(val)
           return cache
        }

    }

    function logicFunction (value){
        name["firstName"] = value
        return name
       
    }
    const useMemocall = myUseMemo(logicFunction)
   console.log("retrun ", useMemocall("sri"))
   console.log("retrun ", useMemocall("sri"))
   console.log("retrun ", useMemocall("sri"))
   console.log("retrun ", useMemocall("sris"))

}
Parent()
