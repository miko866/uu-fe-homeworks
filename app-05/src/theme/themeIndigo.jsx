import { createTheme } from '@mui/material/styles';
import { indigo } from '@mui/material/colors';

export const appThemeIndigo = createTheme({
  palette: {
    primary: {
      main: indigo[500],
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
          backgroundColor: indigo[500],
          color: '#fff',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          backgroundColor: indigo[500],
          color: '#fff',
        },
      },
    },
  },
});
