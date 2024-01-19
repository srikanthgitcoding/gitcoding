type familyDetails = {
    fName:string,
    whereGoing:string,
    dategng: Date
}
function Test<familyDetails>({fName,whereGoing,dategng}){
console.log(fName,whereGoing,dategng)
}

Test({fName:"",whereGoing:"dubai",dategng:new Date()})