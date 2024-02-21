const PromiseTes = (callback) => {
  setTimeout(() => {
    callback("ss");
  });
};

const promiseTes = () => {
  return new Promise((resolve,reject)=>{
    PromiseTes((data)=>{
        resolve(data)
    })
  })
}

promiseTes().then(data=> console.log(data))
