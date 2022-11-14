import React from 'react';

import { Box, Card, CardMedia, Typography } from '@mui/material';

const SimpleImageComponent = ({ image }) => {
  return (
    <Box>
      <Typography variant="h6" component="h2">
        Priebežné hodnotenie podľa témat
      </Typography>

      <Card
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
        }}>
        <CardMedia
          component="img"
          alt="chart"
          height="275"
          image={require(`../assets/img/${image.name}`)}
        />
      </Card>
    </Box>
  );
};

export default SimpleImageComponent;
