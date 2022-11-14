import React from 'react';

import { Grid } from '@mui/material';

import SimpleBox from './SimpleBoxComponent';

const SimpleHeaderComponent = ({ data }) => {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 6, md: 12 }}>
      {data.map((item, index) => (
        <Grid item xs={2} sm={3} md={3} key={`simple-header-${index}`}>
          <SimpleBox item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SimpleHeaderComponent;
