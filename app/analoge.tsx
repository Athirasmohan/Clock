"use client";

import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

const AnalogClock: React.FC = () => {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!time) {
    return null;
  }

  const secondDegrees = (time.getSeconds() / 60) * 360 + 90;
  const minuteDegrees = (time.getMinutes() / 60) * 360 + 90;
  const hourDegrees = (time.getHours() / 12) * 360 + (time.getMinutes() / 60) * 30 + 90;

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="black"
    >
      <Box position="relative" width="300px" height="300px">
        {/* Clock Face */}
        <Box
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '6px solid white',
            position: 'relative',
            boxSizing: 'border-box',
          }}
        >
          {/* Hour Hand */}
          <Box
            sx={{
              width: '6px',
              height: '60px',
              backgroundColor: 'white',
              position: 'absolute',
              top: '28%',
              left: '50%',
              transformOrigin: 'bottom', // Rotate from the bottom center
              transform: `rotate(${hourDegrees}deg)`,
              transition: 'all 0.05s ease-in-out',
            }}
          />
          {/* Minute Hand */}
          <Box
            sx={{
              width: '4px',
              height: '90px',
              backgroundColor: 'white',
              position: 'absolute',
              top: '19%',
              left: '50%',
              transformOrigin: 'bottom', // Rotate from the bottom center
              transform: `rotate(${minuteDegrees}deg)`,
              transition: 'all 0.05s ease-in-out',
            }}
          />
          {/* Second Hand */}
          <Box
            sx={{
              width: '2px',
              height: '100px',
              backgroundColor: 'red',
              position: 'absolute',
              top: '19%',
              left: '50%',
              transformOrigin: 'bottom', // Rotate from the bottom center
              transform: `rotate(${secondDegrees}deg)`,
              transition: 'all 0.05s ease-in-out',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AnalogClock;
