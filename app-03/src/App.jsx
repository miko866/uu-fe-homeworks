import React from 'react';

import { Container, CssBaseline} from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import * as routes from './routes';
import SimpleNavigationComponent from './components/SimpleNavigationComponent';

import Dashboard from './views/Dashboard'
import Simple from './views/Simple'
import Counter from './views/Counter'
import NotFound from './views/NotFound'


const App = () => {
  return (
    <>
      <CssBaseline />

      <SimpleNavigationComponent />

      <Container fixed sx={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path={routes.SIMPLE_ROUTE} element={<Simple />} />
          <Route path={routes.COUNTER_ROUTE} element={<Counter />} />
          {/* Full back route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
