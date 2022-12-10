import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const appThemeRed = createTheme({
  palette: {
    primary: {
      main: red[500],
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
          backgroundColor: red[500],
          color: '#fff',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          backgroundColor: red[500],
          color: '#fff',
        },
      },
    },
  },
});
