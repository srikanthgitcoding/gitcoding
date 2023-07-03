import React, { useState } from 'react'
import Categery from './Categery'
import Menu from './Menu'
import Data from './data'

const cateroyes = ['all',...new Set(Data.map((item,index)=>item.category))]
console.log("cateroyes",cateroyes)
function App() {
    const [menuItemsData, setMenuItemsData] = useState(Data)
    
    const filterCatergyData = (cateroye) =>{
        console.log("slecte category",cateroye)
        if(cateroye == "all") {setMenuItemsData(Data); return;}
        let categoryData = Data.filter((item)=>item.category === cateroye)
        console.log("category", categoryData)
        setMenuItemsData(categoryData)
    }
    console.log("data",Data)
  return (
    <div>
        <h1 className='menu-heading'>welcome to the Menu !</h1>
        <Categery cateroyesList={cateroyes} filterCatergyData={filterCatergyData}></Categery>
        <Menu menuItems={menuItemsData}></Menu>
    </div>
  )
}

export default App