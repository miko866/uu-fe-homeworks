import React from 'react';

import { Container, CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import { appTheme } from './theme';

import * as routes from './routes';
import SimpleNavigationComponent from './components/SimpleNavigationComponent';

import Dashboard from './views/Dashboard';
import Simple from './views/Simple';
import Counter from './views/Counter';
import Bazar from './views/Bazar';
import ColorSchema from './views/ColorSchema';
import NotFound from './views/NotFound';

const App = () => {
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
