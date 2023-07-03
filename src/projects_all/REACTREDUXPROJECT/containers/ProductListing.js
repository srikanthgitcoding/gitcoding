import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'
import {setProducts} from '../../REACTREDUXPROJECT/redux/actions/productActions'

function ProductListing() {
 const products = useSelector(state=> state)
 console.log("products", products)
 const dispatch = useDispatch()

 const makeAPI = async() =>{

     const resp = await axios.get("https://fakestoreapi.com/products").catch((e)=> console.log("errpr",e)) 
     console.log("res", resp, typeof(resp)) 
     dispatch(setProducts(resp.data))  
    }
 useEffect(() =>{
    makeAPI()
 },[])
  return (
    <div>ProductListing
    <ProductComponent></ProductComponent>
    </div>
  )
}

export default ProductListing