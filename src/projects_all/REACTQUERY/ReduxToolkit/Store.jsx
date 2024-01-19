import React from 'react'
import {configureStore} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import {Provider, useSelector, useDispatch} from 'react-redux'


const initialState = {counter:0} 

export const counterSlice = createSlice({
    name:"counterDetails",
    initialState,
    reducers:{
        increment:(state)=>{
            console.log("increment",state)
            state.counter ++
        },
        decrement:(state)=>{
            state.counter --
        }
    }
})

console.log("counterSlice",counterSlice)
 const {increment,decrement} = counterSlice.actions
 const counterSliceReducer = counterSlice.reducer
console.log("counterSliceReducer",counterSliceReducer)
export const store = configureStore({
    reducer : {
        Counter:counterSliceReducer,

    }
})

type storeType = <ReturnType<typeof store>>
const Comp =()=>{
    return <Provider store={store}><Store></Store></Provider>
    
}
const Store = () => {
    // console.log("store",store)
    // console.log("store",store.getState())
    // console.log("counterSlice", counterSlice.reducer)
    const count = useSelector((state)=>state.Counter.counter)
    const dispatch = useDispatch()

  return (
    <div>
     test - {count}
      <button onClick={()=>dispatch(increment())}>COunter</button>
      <button onClick={()=>dispatch(decrement())}>decre</button>

    </div>
  )
}

export default Comp
