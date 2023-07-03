import React from 'react'
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


function Index() {
  return (
    <div>
    <Slider defaultValue={30} sx={{width:300,color:"red"}}>
        
    </Slider>
    <Box spacing={{m:3}} sx={{color:"blue",backgroundColor:"red",width:100,height:100}}>box1      <Button>Save</Button></Box>
    <Box component="button" sx={{color:"blue",backgroundColor:"red",width:100,height:100}}>box2</Box>
    <Button sx={{ mb: 3 }} />
    <Box mb={3} />
    <Box marginBottom={3} />
    </div>
    
  )
}

export default Index