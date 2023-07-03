import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

function DropDownExample() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const Suc = styled()
  return (
    <Box sx={{ minWidth: 120,mt:20 }}>
      
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
          displayEmpty
        >
        <MenuItem value="">
            <em>select</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <Typography variant="h1" color="success.main">chekc</Typography>
        
    </Box>
  );
}


export default DropDownExample