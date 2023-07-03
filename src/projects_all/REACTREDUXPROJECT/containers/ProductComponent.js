import { useSelect } from '@mui/base'
import React from 'react'
import { useSelector } from 'react-redux'

function ProductComponent() {
    const products =  useSelector(state => state)
    // const {id, title } = products.allProducts.products
  return (
      
    <div>
        {products.allProducts.products.map((cur,index)=>{
            return <div key={index}> ID is : {cur.id} -  {cur.title}</div>
        })}
    </div>
  )
}

export default ProductComponent