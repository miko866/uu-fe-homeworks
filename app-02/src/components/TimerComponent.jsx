import React, {useEffect, useState} from 'react';

import { Card, CardContent, Typography } from '@mui/material';


const TimerComponent = () => {
  const [time, setTime] = useState(
    new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
  );

  useEffect(
    () => {
      const intervalId = setInterval(() => {

        setTime(new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds());
      }, 1000);
      return () => {
        clearInterval(intervalId)
      }
    }
  )



  return (
    <Card sx={{ minWidth: 275, marginTop: '2rem', marginBottom: '2rem' }} elevation={0}>
      <CardContent>
        <Typography sx={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center' }}>
          {time}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TimerComponent;
