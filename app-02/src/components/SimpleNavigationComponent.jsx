import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import * as routes from '../routes';

const SimpleNavigationComponent = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">uuApp</Link>
          </Typography>

          <Button color="inherit">
            <Link to={routes.SIMPLE_ROUTE}>Simple</Link>
          </Button>

          <Button color="inherit">
            <Link to={routes.COUNTER_ROUTE}>Counter</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default SimpleNavigationComponent;
