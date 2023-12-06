function subarraySum(arr, n, s){
    //your code here
    let result = 0
    let firstIndex = 1
    let lastIndex = 1
    for(let i=0;i<n;i++){
        if(result === s){
            return [firstIndex,lastIndex]
        }else if(result > s){
            let value = result - s
            if(arr.indexOf(value) > -1){
                firstIndex = arr.indexOf(value) + 2
                return [firstIndex,lastIndex]
            }else{
                return -1
            }
        }
        
        result +=arr[i]
        lastIndex = i + 1
        
    }
}

var arrr = [
    '135', '101', '170', '125', '79',  '159',
    '163', '65',  '106', '146', '82',  '28',
    '162', '92',  '196', '143', '28',  '37',
    '192', '5',   '103', '154', '93',  '183',
    '22',  '117', '119', '96',  '48',  '127',
    '172', '139', '70',  '113', '68',  '100',
    '36',  '95',  '104', '12',  '123', '134'
  ]
  
console.log(subarraySum(arrr,42, 468))

