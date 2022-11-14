import React from 'react'

import { Box, Typography } from '@mui/material';

const SimpleBoxComponent = ({item}) => {
  return (
    <Box
      sx={{
        padding: '1rem',
        backgroundColor: '#eeeeee',
        textAlign: 'center'
      }}>
      <Typography variant="h6" component="h2">
        {item.text} <br/>
        {item.value}{item.type === 'percent' ? '%' : ''}
      </Typography>
    </Box>
  );
}

export default SimpleBoxComponent;
