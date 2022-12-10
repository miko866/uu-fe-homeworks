import React, {useState} from 'react';

import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';

const InfoCardComponent = ({ title, sum, button, maxValue, onIncrease }) => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((count) => count + 1);
    onIncrease(count)
  };

  const outOfTime = () => {
    const start = 22 * 60 + 0;
    const end =  6 * 60 + 0;
    const now = new Date();
    const time = now.getHours() * 60 + now.getMinutes();
    return time >= start && time < end;
  }

  return (
    <Card sx={{ minWidth: 275, marginTop: '2rem', marginBottom: '2rem', display: 'flex' }}>
      <CardContent sx={{ width: '100%' }}>
        <Typography
          sx={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center' }}
          color={count >= maxValue ? 'red' : 'text.secondary'}
          gutterBottom>
          {title}
        </Typography>
        {sum !== undefined ? (
          <Typography sx={{ textAlign: 'center', fontWeight: 'bold' }} variant="h5" component="div">
            {sum}
          </Typography>
        ) : (
          <Typography sx={{ textAlign: 'center' }} variant="h5" component="div" color={count >= maxValue ? 'red' : ''}>
            {count}
          </Typography>
        )}
      </CardContent>

      {button === true ? (
        <CardActions>
          <Button
            size="big"
            variant="contained"
            sx={{ paddingRight: '2rem', paddingLeft: '2rem' }}
            onClick={increase}
            disabled={count >= maxValue || outOfTime()}>
            +1
          </Button>
        </CardActions>
      ) : null}
    </Card>
  );
};

export default InfoCardComponent;
