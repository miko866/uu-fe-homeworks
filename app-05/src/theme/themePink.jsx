import { createTheme } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

export const appThemePink = createTheme({
  palette: {
    primary: {
      main: pink[500],
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
          backgroundColor: pink[500],
          color: '#fff',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          backgroundColor: pink[500],
          color: '#fff',
        },
      },
    },
  },
});
