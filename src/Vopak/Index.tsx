import React from 'react'

interface ITest1{
     terminal : string[],
      tankId :  Array<string>,
}


type test1 = Record<string,string> & Omit<ITest1, "terminal">
const assignData :test1 = {fname:"", tankId:[""]}
assignData["fname"] = "srikanth"
assignData["lname"] = "mothkuri"


function Index() {

  return (
    <div>Index</div>
  )
}

export default Index 


// this is an main Index file

