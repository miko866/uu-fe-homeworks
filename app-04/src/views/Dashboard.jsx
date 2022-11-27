import React, {useState} from 'react'

import {Box, Typography, Slider } from '@mui/material';

import BarChartComponent from '../components/BarChartComponent';

import { statsTypes, statsData } from '../data/statsData';

const marks = [
  {
    value: 1,
    label: '2018',
  },
  {
    value: 2,
    label: '2019',
  },
  {
    value: 3,
    label: '2020',
  },
  {
    value: 4,
    label: '2021',
  },
  {
    value: 5,
    label: '2022',
  },
];

const Dashboard = () => {
  const [value, setValue] = useState(1);
  const [types] = useState(statsTypes);

  const currentData = statsData.slice(-value)

  return (
    <>
      <Typography variant="h2">Dashboard</Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingBottom: '2rem',
          paddingTop: '1rem',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <Typography variant="h6" component="p" sx={{ paddingBottom: '2rem' }}>
          Vyberte roky
        </Typography>
        <Box
          sx={{
            width: 300,
          }}>
          <Slider
            aria-label="Always visible"
            defaultValue={1}
            min={1}
            step={1}
            max={5}
            marks={marks}
            valueLabelDisplay="on"
            onChange={(val) => setValue(val.target.value)}
          />
        </Box>
      </Box>

      {types.map((element) => {
        return (
          <Box key={`dashboard-chart-${element}`} sx={{ paddingBottom: '2rem' }}>
            <BarChartComponent data={currentData} title={element}/>
          </Box>
        );
      })}
    </>
  );
}

export default Dashboard;
