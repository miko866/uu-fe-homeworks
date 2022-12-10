import React from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  ListItemText,
  Select,
  Checkbox,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from '@mui/material';

const DialogComponent = ({
  openDialog,
  handleFilterDialog,
  handleResetDialog,
  handleCloseDialog,
  carBrands,
  handleChangeBrand,
  brandNames,
  carModels,
  handleChangeModel,
  modelNames,
  handleChangeKmFrom,
  kmFrom,
  handleChangeKmTo,
  kmTo,
  priceFrom,
  handleChangePriceFrom,
  priceTo,
  handleChangePriceTo,
  fuelType,
  handleFuelChange,
}) => {
  if (openDialog) {
    return (
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Select you filters</DialogTitle>
        <DialogContent>
          <FormControl sx={{ mb: 2, width: '100%' }}>
            <InputLabel id="multiple-checkbox-brand">Brand</InputLabel>
            <Select
              labelId="multiple-checkbox-brand"
              id="multiple-checkbox-brand"
              multiple
              value={carBrands}
              onChange={handleChangeBrand}
              input={<OutlinedInput label="Brand" />}
              renderValue={(selected) => selected.join(', ')}>
              {brandNames.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={carBrands.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ mb: 2, width: '100%' }}>
            <InputLabel id="multiple-checkbox-model">Model</InputLabel>
            <Select
              labelId="multiple-checkbox-model"
              id="multiple-checkbox-model"
              multiple
              value={carModels}
              onChange={handleChangeModel}
              input={<OutlinedInput label="Model" />}
              renderValue={(selected) => selected.join(', ')}>
              {modelNames.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={carModels.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl
            sx={{ mb: 2, width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <TextField
              id="numberFrom"
              label="KM od"
              type="number"
              placeholder="Počet KM od"
              defaultValue={kmFrom}
              onChange={handleChangeKmFrom}
              InputLabelProps={{
                shrink: true,
              }}
              sx={{
                width: '49%',
              }}
            />

            <TextField
              id="numberTo"
              label="KM do"
              type="number"
              placeholder="Počet KM do"
              defaultValue={kmTo}
              onChange={handleChangeKmTo}
              InputLabelProps={{
                shrink: true,
              }}
              sx={{
                width: '49%',
              }}
            />
          </FormControl>

          <FormControl
            sx={{ mb: 2, width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <TextField
              id="priceFrom"
              label="Cena od"
              type="number"
              placeholder="Cena od"
              defaultValue={priceFrom}
              onChange={handleChangePriceFrom}
              InputLabelProps={{
                shrink: true,
              }}
              sx={{
                width: '49%',
              }}
            />

            <TextField
              id="priceTo"
              label="Cena do"
              type="number"
              placeholder="Cena do"
              defaultValue={priceTo}
              onChange={handleChangePriceTo}
              InputLabelProps={{
                shrink: true,
              }}
              sx={{
                width: '49%',
              }}
            />
          </FormControl>

          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Palivo</FormLabel>
            <RadioGroup row name="row-radio-buttons-group" onChange={handleFuelChange} value={fuelType}>
              <FormControlLabel value="Benzín" control={<Radio />} label="Benzín" />
              <FormControlLabel value="Nafta" control={<Radio />} label="Nafta" />
              <FormControlLabel value="Elektro" control={<Radio />} label="Elektro" />
            </RadioGroup>
          </FormControl>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleResetDialog}>Cancel</Button>
          <Button onClick={handleFilterDialog}>Search</Button>
        </DialogActions>
      </Dialog>
    );
  } else return null;
};

export default DialogComponent;
