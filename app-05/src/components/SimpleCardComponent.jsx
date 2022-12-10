import React from 'react';

import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const SimpleCardComponent = ({ data }) => {
  return (
    <Box>
      <Typography variant="h6" component="h2">
        Dnešný lektor
      </Typography>

      <Card
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
        }}>
        <PersonIcon sx={{ fontSize: '12rem' }} />

        <Box sx={{
          width: '100%',
          height: '100%',
          padding: '1rem'
        }}>
          <CardContent>
            <Typography variant="h6" component="h3">
              Lektor {data.lectorName}
            </Typography>

            <Typography variant="body1" component="p" sx={{paddingTop: '2rem'}}>
              {data.text}
            </Typography>
          </CardContent>
          <CardActions sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end'
          }}>
            <Button size="medium" variant="contained" sx={{ textTransform: 'none' }}>
              Kontaktovať
            </Button>
          </CardActions>
        </Box>
      </Card>
    </Box>
  );
};

export default SimpleCardComponent;
