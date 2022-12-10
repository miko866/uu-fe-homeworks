import { createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

export const appThemeBlue = createTheme({
  palette: {
    primary: {
      main: blue[500],
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
          backgroundColor: blue[500],
          color: '#fff',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          backgroundColor: blue[500],
          color: '#fff',
        },
      },
    },
  },
});
