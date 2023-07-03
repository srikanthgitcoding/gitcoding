import React from 'react';
import { Typography } from  '@mui/material'

function MUITypoGraphy() {
  return (
    <div>
        <Typography variant='h1'>heading h1</Typography>
        <Typography variant='h2'> heading h2</Typography>
        <Typography variant='h3'>heading h3</Typography>
        <Typography variant='h4' gutterbottom>heading h4</Typography>
        <Typography variant='h5'>heading h5</Typography>
        <Typography variant='h6'>heading h6</Typography>
        <Typography variant='subtitle1'>subtitle1 - this is also h6 variwnt but differnt font size</Typography>
        <Typography variant='subtitle2'>subtitle2 -  - this is also h6 variwnt but differnt font</Typography>
        <Typography variant='body1'>body1 variant -  paragraph</Typography>
        <Typography variant='body2'>body2 -  paragraph</Typography>
        <Typography>body1 variant -  paragraph</Typography>


    </div>
  )
}

export default MUITypoGraphy