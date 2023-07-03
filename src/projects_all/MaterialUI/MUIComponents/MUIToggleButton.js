import { Box, ToggleButton, ToggleButtonGroup, Button } from '@mui/material'
import React, { useState } from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



function MUIToggleButton() {
  const [first, setfirst] = useState("a")
  const changeValue = (e,v) =>{
    setfirst(v)
  }
  const propsss = {
    value : first,
    color: 'success',
    onChange : changeValue,
    exclusive: true,
  }
  const sx = {
    sx: {
      color: '#fff',
      '&:hover':{
        color:"red"
      }
    }
  }
//   <ToggleButtonGroup
//   color="primary"
//   value={first}
//   exclusive
//   onChange={changeValue} in html tag use {}
// >
  return (
    <Box>
    <Button {...sx} variant="contained">button</Button>
        <ToggleButtonGroup {...propsss}>
            <ToggleButton value="a" aria-label='a'><AcUnitIcon /></ToggleButton>
            <ToggleButton value="b" aria-label='b'><AccessibilityIcon /></ToggleButton>
            <ToggleButton value="c" aria-label='c'><AccountCircleIcon /></ToggleButton>
        </ToggleButtonGroup>
    </Box>
  )
}

export default MUIToggleButton