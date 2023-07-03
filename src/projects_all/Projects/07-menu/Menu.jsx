import React from 'react'

function Menu({menuItems}) {
   
  return (
    <div>
        {
            menuItems && menuItems.map((item,index)=>{
                const {id,title, category, price} = item
                return<div key={id}>
                    <h1>{title} and this is for {category} and the price is {price}</h1>
                </div>
            })
        }
    </div>
  )
}

export default Menu