// import React, { useState } from 'react'
// import './index.css'

// function TikTok() {
//     const [user, setUser] = useState('x')
//     const [cells, setCells] = useState(Array(9).fill(''))
//     console.log("first",cells)
//     const checkForWinner = () =>{
//         const matching = { 
//             across : [
//                 [1,2,3],
//                 [4,5,6],
//                 [7,8,9]
//             ],
//              down : [
//                 [1,4,7],
//                 [2,5,8],
//                 [3,6,9]
//             ],
//              dailgonal : [
//                 [1,5,9],
//                 [7,5,3],
//             ]
//         }
//         for(arr in matching){
//             console.log(arr)
//         }
//     }
//     checkForWinner()
 
    
    
//     const newArray = [...cells]

//     const whoClicked = (num) =>{
//         console.log("num",num)
//         if(user == 'x'){
//             setUser('o')
//             newArray[num] = 'x'
//             matching.map((value,index)=>{
//                 console.log("value", matching[index])
//             })
//         }else{
//             setUser('x')
//             newArray[num] = 'o'
//         }
//         console.log("newArray", newArray)
//         setCells([...newArray])
//     }
//     function TableCell({num}){
//         return <td onClick={()=>whoClicked(num)}> -</td>
//     }
//   return (
//     <div>
//     <div>turn is : </div>
//         <table>
//             <tbody>
//                 <tr>
//                     <TableCell num={0}></TableCell>
//                     <TableCell num={1}></TableCell>
//                     <TableCell num={2}></TableCell>
//                 </tr>
//                 <tr>
//                     <TableCell num={3}></TableCell>
//                     <TableCell num={4}></TableCell>
//                     <TableCell num={5}></TableCell>
//                 </tr>
//                 <tr>
//                     <TableCell num={6}></TableCell>
//                     <TableCell num={7}></TableCell>
//                     <TableCell num={8}></TableCell>
//                 </tr>
//             </tbody>
//         </table>
//     </div>
//   )
// }

// export default TikTok