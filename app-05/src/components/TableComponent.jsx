import React from 'react';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const TableComponent = ({ headerData, rowData }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead
          sx={{
            backgroundColor: '#bdbdbd',
          }}>
          <TableRow>
            {headerData.map((row) => (
              <TableCell key={row} align="center" sx={{ fontWeight: 'bold' }}>
                {row}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.map((row) => {
            return (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="center">{row[headerData[0].toLowerCase()]}</TableCell>
                <TableCell align="center">{row[headerData[1].toLowerCase()]}</TableCell>
                <TableCell align="center">{row[headerData[2].toLowerCase()]}</TableCell>
                <TableCell align="center">{row[headerData[3].toLowerCase()]}</TableCell>
                <TableCell align="center">{row[headerData[4].toLowerCase()]}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
