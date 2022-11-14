import React from 'react';

import { Container, CssBaseline} from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import * as routes from './routes';
import SimpleNavigationComponent from './components/SimpleNavigationComponent';

import Welcome from './views/Welcom'
import Simple from './views/Simple'
import Counter from './views/Counter'


const App = () => {
  return (
    <>
      <CssBaseline />

      <SimpleNavigationComponent />

      <Container fixed sx={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path={routes.SIMPLE_ROUTE} element={<Simple />} />
          <Route path={routes.COUNTER_ROUTE} element={<Counter />} />
        </Routes>

      </Container>
    </>
  );
};

export default App;
