import React from 'react';

import { Box, Button, Typography } from '@mui/material';

import DialogComponent from '../components/DialogComponent';
import TableComponent from '../components/TableComponent';

import { dummyCarsData, dummyHeaderData } from '../data/cars';

const brandNames = ['Škoda', 'BMW', 'Porsche', 'Audi'];
const modelNames = [
  'superb',
  'octavia',
  'fabie',
  'felicie',
  'i3',
  'iX',
  'i4',
  'iX3',
  '911',
  'Taycan',
  'Boxter',
  'Cayman',
  'Q3',
  'GT',
  'SportBack',
  'S',
];

const Bazar = () => {
  const [carBrands, setCarBrands] = React.useState([]);
  const [carModels, setCarModels] = React.useState([]);
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleChangeBrand = (event) => {
    const {
      target: { value },
    } = event;
    setCarBrands(typeof value === 'string' ? value.split(',') : value);
  };
  const handleChangeModel = (event) => {
    const {
      target: { value },
    } = event;
    setCarModels(typeof value === 'string' ? value.split(',') : value);
  };

  const filteredCars = dummyCarsData.filter((item) => {
    const brandsData = [];
    const modelData = [];

    if (carBrands.length !== 0) {
      for (let brand of carBrands) {
        if (item.brand === brand) return item;
      }
    } else if (carModels.length !== 0) {
    } else return dummyCarsData;
  });

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
          Car Bazar
        </Typography>

        <div>
          <Button variant="outlined" onClick={handleClickOpenDialog}>
            Open filter
          </Button>
        </div>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <TableComponent headerData={dummyHeaderData} rowData={filteredCars} />
      </Box>

      <DialogComponent
        openDialog={openDialog}
        handleCloseDialog={handleCloseDialog}
        carBrands={carBrands}
        handleChangeBrand={handleChangeBrand}
        brandNames={brandNames}
        carModels={carModels}
        handleChangeModel={handleChangeModel}
        modelNames={modelNames}
      />
    </>
  );
};

export default Bazar;
