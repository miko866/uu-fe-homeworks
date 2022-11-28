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

  let filteredCarModels = [];

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleResetDialog = () => {
    setOpenDialog(false);
    setCarBrands([]);
    setCarModels([]);
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

    if (carBrands.length !== 0 && carModels.length === 0) {
      for (let brand of carBrands) {
        if (item.brand === brand) {
          if (modelNames.includes(item.model)) {
            filteredCarModels.push(item.model);
          }

          filteredCarModels = [...new Set(filteredCarModels)];
          return item;
        }
      }
    } else if (carModels.length !== 0) {
      console.log('filteredCarModels ins CARMODELS--------------------', filteredCarModels);
      for (let model of carModels) {
        if (item.model === model) return item;
      }
    } else {
      filteredCarModels = modelNames;
      return dummyCarsData;
    }
  });

  console.log('filteredCars --------------------', filteredCars);

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
        handleResetDialog={handleResetDialog}
        carBrands={carBrands}
        handleChangeBrand={handleChangeBrand}
        brandNames={brandNames}
        carModels={carModels}
        handleChangeModel={handleChangeModel}
        modelNames={filteredCarModels}
      />
    </>
  );
};

export default Bazar;
