import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';

export const appThemeGreen = createTheme({
  palette: {
    primary: {
      main: green[500],
      contrastText: '#fff',
    },
    background: {
      default: '#fff',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: green[500],
          color: '#fff',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          backgroundColor: green[500],
          color: '#fff',
        },
      },
    },
  },
});
