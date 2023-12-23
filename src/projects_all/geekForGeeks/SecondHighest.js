function secondHIghestElement(a,n){
    let first = 0,second =0,i
    if(n < 2){
        return -1
    }

    for(i=0;i<n;i++){
        if(a[i] > first){
            console.log(a[i])
            second = first
            first = a[i]
        }
        if(a[i] > second && a[i] !== first ){
            second = a[i]
        }
    }
    return first +" "+second
}
const arr = [7,8]
console.log(secondHIghestElement(arr,arr.length))