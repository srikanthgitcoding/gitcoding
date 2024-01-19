import React, {createContext, useContext } from 'react'
const CreatecontextData = React.createContext<{name:string} | null>(null)

function Index() {
  return (
    <div>
        <CreatecontextData.Provider value={{name:"srikanth"}}></CreatecontextData.Provider>
    </div>
  )
}

function Consumer(){
    const context = useContext(CreatecontextData)
    if(!context){
      throw new Error("error")
    }
    return context
}

export default Index