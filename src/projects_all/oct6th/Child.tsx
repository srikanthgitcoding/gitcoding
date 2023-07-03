import React from 'react'

type DataType = {
  data : {
    userId: number,
    id: number,
    title: string,
    completed: boolean
  }[]
}

function Child(data:DataType) {
  const data1 =  data.data
  return (
    <div>
      {data1 && data1.map((item,index)=>{
        return <div key={index}>{item.title} {item.id}</div>
      })}
    </div>
  )
}

export default Child