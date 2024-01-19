import React from 'react'

const Card = ({children}) => {
  return (
    <div>Card - 
    <br></br>
    {children}
    </div>
  )
}

const CardImage = ({src,alt,width,height}) => {
    return (
      <img src={src} alt={alt} width={width} height={height}/>
    )
  }

const CardContent = () => {
    return (
      <div>Card content</div>
    )
  }

const CardActions = ({children}) => {
    return (
      <div>{children}</div>
    )
  }


export const CardComponent = () => {
  const curryingExample =(name)=>(e)=>{
    console.log("curryingExample",name,e.target.innerHTML)
  }
  return (
    <div>
      <Card>
        <CardImage width="20px" height="20px" src="https://media.istockphoto.com/id/1382384282/photo/bangalore-or-bengaluru.jpg?s=612x612&w=0&k=20&c=6pxwL3JxNV2B_NZSLMZLhrSLqAbyCPlGuSZYKImpjKQ=" alt="phottography"/>
        <CardContent>
            <h2>Card content is so big</h2>
        </CardContent>
        <CardActions>
            <button onClick={curryingExample("srikanth")}>save button</button>
            <button>cancel button</button>
        </CardActions>
      </Card>
    </div>
  )
}



// var count11 = 0
// const obj ={
//     name:"John Doe",
//     getMethod:function(){
//         return this.name
//     },
//     setMethod:function(data){
//         this.name = data
//     },
//     incrmrenTCount:()=> {count11++; return count11;}
// }

// obj.setMethod("srikanth mothkuri")
// console.log(obj.incrmrenTCount())



// const button = document.getElementById("")
// button.addEventListener("click",async()=>{
//     const modeulName = await import("/some.js")
//     modeulName.someMethod()
// })

// button.addEventListener("click",async function(){
//     const modeulName = await import("/some.js")
//     modeulName.someMethod()
// })


// let instance;
// let counter = 0

// class A{
//     constructor(){
//         if(instance){
//             throw new Error("cant create new instance")
//         }
//     }

//         increment(){
//             counter++
//         }
//         deccrement(){
//             counter--
//         }

//     }
// const counterInstance = new A()    
// counterInstance.increment();


// const obj11 ={
//     increment(){
//         this.count++;
//     }
// }