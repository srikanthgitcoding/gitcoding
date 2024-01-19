import React, { createContext, useState } from 'react'
import ParentReduxToolkit, { StoreComp } from '../Test/Store'
import QueryRequest from './QueryRequest'

// import GetCAllWIthTypes from './GetCAllWIthTypes'


function Home() {

  return (
    <div>
    {/* <ParentReduxToolkit></ParentReduxToolkit> */}
    <QueryRequest></QueryRequest>
    {/* <GetCAllWIthTypes></GetCAllWIthTypes> */}
    </div>
  )
}

export default Home