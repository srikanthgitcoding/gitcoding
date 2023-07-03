import React from 'react'
import { Button, Stack, IconButton } from  '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';



function MUIButton() {
  return (
      <Stack>
    <Stack spacing={2} direction="row" gutterbottom>
    <Button variant="contained">Caontained</Button>
    <Button variant="outlined">outlined</Button>
    <Button variant="text" href="https://google.com">text</Button>
    <Button variant="text" disabled>
  text Disabled
</Button>
  <Button variant="contained" disabled>
  contained Disabled
</Button>
  <Button variant="outlined" disabled>
  outlined Disabled
</Button>
<Button variant="contained" disableElevation>
  Disable elevation
</Button>
<Button variant="contained" disableRipple>
  Disable ripplei9
</Button>
    </Stack>

    <Stack direction='row' spacing={2}>
    <Button color="secondary">Secondary</Button>
<Button variant="contained" color="success">
  Success
</Button>
<Button variant="outlined" color="error" size="large" startIcon={<DeleteIcon></DeleteIcon>}>
  Error
</Button>
<Button variant="outlined" color="error" size="large" endIcon={<DeleteIcon></DeleteIcon>}>
  Error
</Button>
<IconButton aria-label='send' color="error"><DeleteIcon></DeleteIcon></IconButton>
    </Stack>
    </Stack>
  )
}

export default MUIButton