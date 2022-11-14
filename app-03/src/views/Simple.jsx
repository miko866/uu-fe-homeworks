import React from 'react'

import { Grid } from '@mui/material';

import SimpleHeaderComponent from '../components/SimpleHeaderComponent';
import SimpleCardComponent from '../components/SimpleCardComponent';
import SimpleImageComponent from '../components/SimpleImageComponent';
import SimpleTableComponent from '../components/SimpleTableComponent';

import { headerData, cardData, chartImage, tableData } from '../data/dummyData';

const Simple = () => {
  return (
    <>
      <SimpleHeaderComponent data={headerData} />

      <Grid
        container
        spacing={4}
        sx={{
          paddingTop: '2rem',
          paddingBottom: '2rem',
        }}>
        <Grid item xs={8}>
          <SimpleCardComponent data={cardData} />
        </Grid>
        <Grid item xs={4}>
          <SimpleImageComponent image={chartImage} />
        </Grid>
      </Grid>

      <SimpleTableComponent data={tableData} />
    </>
  );
}

export default Simple;
