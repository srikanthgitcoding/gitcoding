import React from 'react'
import {Box} from '@mui/material'
import './index.css'


function MUIBox() {
  const style1 = {
    color : "yellow"
  }
  
  return (
    <>
    <Box component="span" mr={1} sx={{width:'200px',height:'200px',backgroundColor: '#567'}}>
        test 1
    </Box>
    <Box component="span" sx={{width:'200px',height:'200px',backgroundColor: 'primary.main'}}>
        test 2
    </Box>
    <Box style={style1} sx={{color:"orange"}} className="Button">box xolor</Box>
    
    </>
  )
}

export default MUIBox