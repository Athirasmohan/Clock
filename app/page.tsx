"use client"

import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
const DigitalClock: React.FC = () =>{
const [time,setTime]= useState<string|null> (null);
useEffect(() => {
  const timer = setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  },1000);
  return () => clearInterval(timer);
},[]);
if(!time){
  return null;
}
  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      height="100vh" 
      bgcolor="black"
    >
      <Typography 
        variant="h2" 
        color="white"
        sx={{ fontFamily: 'monospace' }}
      >
        {time}
      </Typography>
    </Box>
  );
};

export default DigitalClock;