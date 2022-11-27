import React from 'react';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

import { dummyCarsData } from '../data/cars';

const Bazar = () => {
  console.log('Halooo');

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="right">Brand</TableCell>
            <TableCell align="right">Model</TableCell>
            <TableCell align="right">KM</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Fuel</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dummyCarsData.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="right">{row.brand}</TableCell>
              <TableCell align="right">{row.model}</TableCell>
              <TableCell align="right">{row.km}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.fuel}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Bazar;
