
interface Iproduct{
    terminalName:string,
    shellProductCode:string
    terminalProductCode:string
    ShellEmailID:string
}

type ShellEmailID = Pick<Iproduct, "ShellEmailID">
type omitEmailID = Omit<Iproduct, "ShellEmailID"> 
type excludeEmailID = Exclude<Iproduct , "ShellEmailID"> 



function fn(props:omitEmailID){
}
const prodtcDetails:excludeEmailID= {
    terminalName:"",
    shellProductCode:"",
    terminalProductCode:"",
}

fn(prodtcDetails)