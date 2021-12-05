import React from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)(({ theme}) => ({
    
    height: '34px',
    color: theme.palette.getContrastText('#399399'),
    backgroundColor: '#399399',
    '&:hover': {
      backgroundColor: '#21868c',
    },
  }));

export default function CustomButton({content,handleClick,id=null,width=null}) {
    return (
        <ColorButton 
          aria-describedby={id} 
          variant="contained" 
          onClick={handleClick}
          sx={{width:width}}
        >
        {content}
        </ColorButton>
    )
}
