import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

export const appThemePurple = createTheme({
  palette: {
    primary: {
      main: purple[500],
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
          backgroundColor: purple[500],
          color: '#fff',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          backgroundColor: purple[500],
          color: '#fff',
        },
      },
    },
  },
});
