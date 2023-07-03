
// for(let i =0;i<2;i++){
//     setTimeout(() =>{
//         console.log("Inner",i)
//     })
//     console.log("outer",i)
// }
// with let   
// outer 0
// outer 1
// Inner 0
// Inner 1
// with var
// outer 0
// outer 1
// Inner 0
// Inner 1

for(let i =0;i<2;i++){
    setTimeout(() =>{
        console.log("Inner",i)
    },0)
    console.log("Outer",i)
}

// with var
// Outer 0
// Outer 1
// Inner 2
// Inner 2

//with let
// Outer 0
// Outer 1
// Inner 0
// Inner 1