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
}) => {
  if (openDialog) {
    return (
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Select you filters</DialogTitle>
        <DialogContent>
          <FormControl sx={{ m: 1, width: 400 }}>
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

          <FormControl sx={{ m: 1, width: 400 }}>
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
            sx={{ m: 1, width: 400, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
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
        </DialogContent>

        <DialogActions>
          <Button onClick={handleResetDialog}>Cancel</Button>
          <Button onClick={handleFilterDialog}>Search</Button>
        </DialogActions>
      </Dialog>
    );
  } else return undefined;
};

export default DialogComponent;
