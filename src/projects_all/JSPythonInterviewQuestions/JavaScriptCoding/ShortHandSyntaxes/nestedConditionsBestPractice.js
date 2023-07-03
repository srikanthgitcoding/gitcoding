// function fn(name){
//     if(name != ''){
//         console.log("name is not empty")
//     }
// }

// fn("srikanth")
// fn("")
//console.log("uuu")
//-------------------------------------
function fn1(name){
    if(name != '') return 
    console.log("name is not empty")
    
}

fn1("srikanth")
fn1('')
//console.log("uuu")
//---------------------------------
function fn2(name){
    if(name == '') return
    console.log("not empty")
    if (name == undefined) return 
    console.log("name is not empty and undefined")
}
fn2("srikanth")
fn2('')



