import React, { useState } from 'react';

import { Box, Button, Typography } from '@mui/material';

import DialogComponent from '../components/DialogComponent';
import TableComponent from '../components/TableComponent';

import { dummyCarsData, dummyHeaderData } from '../data/cars';

import { between } from '../utils/helpers';

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
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(0);
  const [fuelType, setFuelType] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  let filteredCars = [];
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
    setKmFrom(0);
    setKmTo(0);
    setPriceFrom(0);
    setPriceTo(0);
    setFuelType('');
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

  const handleChangePriceFrom = (event) => {
    setPriceFrom(event.target.value);
  };
  const handleChangePriceTo = (event) => {
    setPriceTo(event.target.value);
  };

  const handleFuelChange = (event) => {
    setFuelType(event.target.value);
  };

  if (
    carModels.length !== 0 ||
    carBrands.length !== 0 ||
    kmFrom !== 0 ||
    kmTo !== 0 ||
    priceFrom !== 0 ||
    priceTo !== 0 ||
    fuelType
  ) {
    dummyCarsData.forEach((item) => {
      if (carBrands.length !== 0) {
        for (let brand of carBrands) {
          if (item.brand === brand) {
            if (modelNames.includes(item.model)) {
              filteredCarModels.push(item.model);
            }

            filteredCars.push(item);
          }
        }
        filteredCarModels = [...new Set(filteredCarModels)];
      }

      if (carModels.length !== 0 && carBrands.length === 0) {
        filteredCarModels = modelNames;

        for (let model of carModels) {
          if (item.model === model) filteredCars.push(item);
        }
      } else if (carModels.length !== 0 && carBrands.length !== 0) {
        filteredCars = filteredCars.filter((car) => carModels.includes(car.model));
      }

      if (
        (kmFrom !== 0 && carModels.length !== 0) ||
        (kmTo !== 0 && carModels.length !== 0) ||
        (kmFrom !== 0 && carBrands.length !== 0) ||
        (kmTo !== 0 && carBrands.length !== 0)
      ) {
        filteredCars = filteredCars.filter((car) => {
          if (between(car.km, kmFrom, kmTo)) return car;
          return null;
        });
      } else if (
        (kmFrom !== 0 && carModels.length === 0) ||
        (kmTo !== 0 && carModels.length === 0) ||
        (kmFrom !== 0 && carBrands.length === 0) ||
        (kmTo !== 0 && carBrands.length === 0)
      ) {
        filteredCars = dummyCarsData.filter((car) => {
          if (between(car.km, kmFrom, kmTo)) return car;
          return null;
        });
      }

      if (
        (priceFrom !== 0 && carModels.length !== 0) ||
        (priceTo !== 0 && carModels.length !== 0) ||
        (priceFrom !== 0 && carBrands.length !== 0) ||
        (priceTo !== 0 && carBrands.length !== 0)
      ) {
        filteredCars = filteredCars.filter((car) => {
          if (between(car.price, priceFrom, priceTo)) return car;
          return null;
        });
      } else if (
        (priceFrom !== 0 && carModels.length === 0) ||
        (priceTo !== 0 && carModels.length === 0) ||
        (priceFrom !== 0 && carBrands.length === 0) ||
        (priceTo !== 0 && carBrands.length === 0)
      ) {
        filteredCars = dummyCarsData.filter((car) => {
          if (between(car.price, priceFrom, priceTo)) return car;
          return null;
        });
      }

      if ((fuelType && carModels.length !== 0) || (fuelType && carBrands.length !== 0)) {
        filteredCars = filteredCars.filter((car) => {
          if (car.fuel === fuelType) return car;
          return null;
        });
      } else if ((fuelType && carModels.length === 0) || (fuelType && carBrands.length === 0)) {
        filteredCars = dummyCarsData.filter((car) => {
          if (car.fuel === fuelType) return car;
          return null;
        });
      }
    });
  } else {
    filteredCarModels = modelNames;
    filteredCars = dummyCarsData;
  }

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
        priceFrom={priceFrom}
        handleChangePriceFrom={handleChangePriceFrom}
        priceTo={priceTo}
        handleChangePriceTo={handleChangePriceTo}
        fuelType={fuelType}
        handleFuelChange={handleFuelChange}
      />
    </>
  );
};

export default Bazar;
