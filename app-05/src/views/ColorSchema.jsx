import React, { useContext } from 'react';

import { Box, Typography } from '@mui/material';
import { CirclePicker } from 'react-color';

import { ColorContext } from '../store/Context';

const colors = ['#f44336', '#4caf50', '#9e9e9e', '#3f51b5', '#ff9800', '#e91e63', '#9c27b0', '#2196f3'];

const ColorSchema = () => {
  const [currentColor, setCurrentColor] = useContext(ColorContext);

  const handleChange = (color, event) => {
    setCurrentColor(color.hex);
  };

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

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CirclePicker colors={colors} onChange={handleChange} triangle="hide" />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '2rem' }}>
        <Typography variant="h6" sx={{ color: currentColor }}>
          Current Color
        </Typography>
      </Box>
    </>
  );
};

export default ColorSchema;
