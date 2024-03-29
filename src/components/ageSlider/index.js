
import {React, useState} from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';




function valuetext(value) {
  return `${value} years`;
}

const minDistance = 10;

export default function AgeSlider({value1, setValue1}) {

    
  

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };



  return (

    <Box>

    <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        min={18}
        max={90}
        color="secondary"

  />

</Box>
 

  );
}

