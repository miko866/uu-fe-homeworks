import React from 'react';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const SimpleTableComponent = ({data}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ 'td, th': { border: 1 } }}>
          <TableRow>
            <TableCell>Meno</TableCell>
            <TableCell align="left">Bio</TableCell>
            <TableCell align="left">Priebežné hodnotenie</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name} sx={{ 'td, th': { border: 1 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.bio}</TableCell>
              <TableCell align="left">{row.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default SimpleTableComponent;
