import React from 'react';

import { Box, Typography } from '@mui/material';

const ColorSchema = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Typography
          variant="h2"
          sx={{
            paddingBottom: '2rem',
          }}>
          Color Schema
        </Typography>
      </Box>
    </>
  );
};

export default ColorSchema;
