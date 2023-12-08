var arr = [
    {name:"srikanth",indicator:"Y"},
    {name:"mothkuri",indicator:"Y"},
    {name:"manisha",indicator:"Y"},
]

var findmethd = arr.find(({name})=>name == "srikanth")?.name
console.log(findmethd)
