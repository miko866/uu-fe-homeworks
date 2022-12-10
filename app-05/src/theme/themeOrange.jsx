import { createTheme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

export const appThemeOrange = createTheme({
  palette: {
    primary: {
      main: orange[500],
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
          backgroundColor: orange[500],
          color: '#fff',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          backgroundColor: orange[500],
          color: '#fff',
        },
      },
    },
  },
});
