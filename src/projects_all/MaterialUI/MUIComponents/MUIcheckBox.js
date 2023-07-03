import React from 'react'
import {Checkbox, FormGroup, FormControlLabel} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

function MUIcheckBox() {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (

    <div>checkBox
    <Checkbox inputProps={{'aria-label':'sss'}} checked/>
    <Checkbox inputProps={{'aria-label':'sss'}}/>
    <Checkbox inputProps={{'aria-label':'sss'}} disabled/>

    <Checkbox inputProps={{'aria-label':'sss'}} diabled checked/>

    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
    </FormGroup>
    <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />

    </div>
  )
}

export default MUIcheckBox