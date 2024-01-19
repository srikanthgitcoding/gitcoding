import {configureStore, createSlice} from '@reduxjs/toolkit'
import { Provider, useSelector,useDispatch } from 'react-redux'

let initialState ={
    count : 0
}

const counterSlice = createSlice({
    name:"CounterSlice",
    initialState,
    reducers:{
        increment:(state)=>{
            state.count ++
        },
        decrement:(state)=>{
            state.count --
        }
    }
})

const { increment,decrement } = counterSlice.actions
console.log("counterSlice.actions",counterSlice.actions)
const store = configureStore({
    reducer:{
        Counter:counterSlice.reducer
    }
})

 const ParentReduxToolkit = () => {
    const dispatch = store.dispatch;
  return (
    <Provider store={store}>
      <StoreComp></StoreComp>
    </Provider>
  )
}

export default ParentReduxToolkit

export const StoreComp = () => {
    const data = useSelector((state)=>state.Counter.count)
    const data1 = useSelector((state)=>state)

    console.log("data1")
    const dispath = useDispatch()
  return (
    <div>
        store - {data}
        <button onClick={()=>dispath(increment())}>incre</button>
        <button onClick={()=>dispath(decrement())}>decrement</button>
    </div>
  )
}




