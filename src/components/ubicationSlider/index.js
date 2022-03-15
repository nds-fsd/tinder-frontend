
import {React, useState} from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';




export default function UbicationSlider({value, setValue}) { 
    
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  return (

    <Box>
  <Slider aria-label="Volume"  value={value} onChange={handleChange} color="secondary"  />
  </Box>

  );
}


