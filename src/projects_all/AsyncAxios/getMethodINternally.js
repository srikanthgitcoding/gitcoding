import axios from 'axios'

axios.prototype.create1 =function(){
return {
  get:function wrap(){
    console.log("0000")
    return new Promise((resolve,reject)=>{
      resolve({data:{"name":"srikanth"},status:200})
    })
  }
}
}

const data = axios.prototype.create1()
console.log("data", data.get().then(data=>console.log(data)))
