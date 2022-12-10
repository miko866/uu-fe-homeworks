import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({
  palette: {
    primary: {
      main: '#374955',
      contrastText: '#fff',
    },
    secondary: {
      main: '#EB9929',
      contrastText: '#fff',
    },
    text: {
      primary: '#374955',
      secondary: '#9BAEBC',
    },
    background: {
      default: '#fff',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#374955',
          color: '#fff',
        },
      },
    },
  },
});
