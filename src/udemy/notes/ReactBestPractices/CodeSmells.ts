// 1
if(login){
    if(authenticated){
        if(admin){
            console.log("admin ")
        }else{
            console.log("not admin ")
        }
    }else{
        console.log("not authenticated ")
    }
}else{
    console.log("not logged in")
}
// refactor above code  1
if(!login){
    console.log("not logged in")
return ;

}
if(!authenticated){
    console.log("not authenticated in")
return ;
}
if(!admin){
    console.log("not admin in")
return ;
}
return "he is admin"


#2 

let value = "monday"

if(value == "monday"){
    return 1
}else if(value == "tuesday"){
    return 2
}else if(value == "wednesday"){
    return 3
}

// refactor code 2
const obj = {
    monday :1,
    tuesday : 2,
    wednesday:3
}
let result = obj[value]


//3 
const names = {fname:"srikanth",lname:"mothkuri"}

    //1 destructor 

     var {fname,lname} = names

     //2 naming it 

     var {fname:firstName,lname:lastName} = names

     //3 
     var {fname:firstName = "this text will be replace here",lname:lastName = "this text will be replace here"} = names

     




