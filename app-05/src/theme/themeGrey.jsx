import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

export const appThemeGrey = createTheme({
  palette: {
    primary: {
      main: grey[500],
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
          backgroundColor: grey[500],
          color: '#fff',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          backgroundColor: grey[500],
          color: '#fff',
        },
      },
    },
  },
});
