var arr=[]
function Fibonacci(n){
    if(n == 0){
        return []
    }else if(n == 1){
        return [0]
    }
    if(n >= 2){
        arr = [0,1]
        for (let i = 2;i < n ;i++){
            arr.push(arr[i-2] + arr[i-1])
        }
    }

return arr
}

console.log(Fibonacci(10))

// logic here - loop start from i= 2; arr[i-2] + arr[i-1] 