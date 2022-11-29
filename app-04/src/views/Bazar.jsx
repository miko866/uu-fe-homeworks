import React, { useState } from 'react';

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
  const [carBrands, setCarBrands] = useState([]);
  const [carModels, setCarModels] = useState([]);
  const [kmFrom, setKmFrom] = useState(0);
  const [kmTo, setKmTo] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);

  let filteredCarModels = [];

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleFilterDialog = () => {
    setOpenDialog(false);
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

  const handleChangeKmFrom = (event) => {
    setKmFrom(event.target.value);
  };
  const handleChangeKmTo = (event) => {
    setKmTo(event.target.value);
  };

  const filteredCars = dummyCarsData.filter((item) => {
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
    }

    if (carModels.length !== 0) {
      for (let brand of carBrands) {
        if (item.brand === brand) {
          if (modelNames.includes(item.model)) {
            filteredCarModels.push(item.model);
          }

          filteredCarModels = [...new Set(filteredCarModels)];
        }
      }

      for (let model of carModels) {
        if (item.model === model) return item;
      }
    }

    if (kmFrom !== 0 || kmTo !== 0) {
    }
    if (carModels.length === 0 && carBrands.length === 0 && kmFrom === 0 && kmTo === 0) {
      filteredCarModels = modelNames;
      return dummyCarsData;
    }
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
        handleFilterDialog={handleFilterDialog}
        handleCloseDialog={handleCloseDialog}
        handleResetDialog={handleResetDialog}
        carBrands={carBrands}
        handleChangeBrand={handleChangeBrand}
        brandNames={brandNames}
        carModels={carModels}
        handleChangeModel={handleChangeModel}
        modelNames={filteredCarModels}
        handleChangeKmFrom={handleChangeKmFrom}
        kmFrom={kmFrom}
        kmTo={kmTo}
        handleChangeKmTo={handleChangeKmTo}
      />
    </>
  );
};

export default Bazar;
