import React, {createContext, useContext } from 'react'
const CreatecontextData = React.createContext<{name:string}>({name:""})

function Index() {
  return (
    <div>
        <CreatecontextData.Provider value={{name:"srikanth"}}></CreatecontextData.Provider>
    </div>
  )
}

function Consumer(){
    const {name} = useContext(CreatecontextData)
}

export default Index