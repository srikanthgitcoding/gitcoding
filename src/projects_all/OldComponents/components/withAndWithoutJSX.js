import React , {Component} from 'react'


// export class JSXCheck extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>JSX Check</h1>
//             </div>
//         )
//     }
// }

// jsx transaltes into React.createElement which intern uses react library

export const JSXCheck = () => {
    // return(
    //         <div>
    //             <h1>JSX Check</h1>
    //         </div>
    // )
    return React.createElement('h1',{className:'checkj'},"Hello scrach JSX")
}