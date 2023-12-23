function closuree(){
    _counter = 0;
    return {
        addData(b){
            return _counter += b 
        },
        retriveDat(){
            return _counter
        }
    }
}

const aaa = closuree()
console.log(aaa.addData(20))
console.log(aaa.addData(20))
console.log(aaa.retriveDat())
