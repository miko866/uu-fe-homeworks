import React, { useEffect, useState, useContext } from 'react';

import { Container, CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import { appThemeBlue } from './theme/themeBlue';
import { appThemeGreen } from './theme/themeGreen';
import { appThemeGrey } from './theme/themeGrey';
import { appThemeIndigo } from './theme/themeIndigo';
import { appThemeOrange } from './theme/themeOrange';
import { appThemePink } from './theme/themePink';
import { appThemePurple } from './theme/themePurple';
import { appThemeRed } from './theme/themeRed';

import { ColorContext } from './store/Context';

import * as routes from './routes';
import SimpleNavigationComponent from './components/SimpleNavigationComponent';

import Dashboard from './views/Dashboard';
import Simple from './views/Simple';
import Counter from './views/Counter';
import Bazar from './views/Bazar';
import ColorSchema from './views/ColorSchema';
import NotFound from './views/NotFound';

import { useMounted } from './utils/hooks/useMounted';

const App = () => {
  const [appTheme, setAppTheme] = useState(appThemeBlue);
  const color = useContext(ColorContext);

  const isMounted = useMounted();
  useEffect(() => {
    if (isMounted) {
      switch (color[0]) {
        case '#f44336':
          setAppTheme(appThemeRed);
          break;
        case '#4caf50':
          setAppTheme(appThemeGreen);
          break;
        case '#9e9e9e':
          setAppTheme(appThemeGrey);
          break;
        case '#3f51b5':
          setAppTheme(appThemeIndigo);
          break;
        case '#ff9800':
          setAppTheme(appThemeOrange);
          break;
        case '#e91e63':
          setAppTheme(appThemePink);
          break;
        case '#9c27b0':
          setAppTheme(appThemePurple);
          break;
        case '#2196f3':
          setAppTheme(appThemeBlue);
          break;
        default:
          console.error(`Sorry, you are out of ${color}.`);
          break;
      }
    }
  }, [color]);

  return (
    <>
      <ThemeProvider theme={appTheme}>
        <CssBaseline enableColorScheme />

        <SimpleNavigationComponent />

        <Container fixed sx={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path={routes.SIMPLE_ROUTE} element={<Simple />} />
            <Route path={routes.COUNTER_ROUTE} element={<Counter />} />
            <Route path={routes.BAZAR_ROUTE} element={<Bazar />} />
            <Route path={routes.COLOR_SCHEMA_ROUTE} element={<ColorSchema />} />
            {/* Full back route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
