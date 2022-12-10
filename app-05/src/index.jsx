import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeContext } from './store/Context';

import './assets/css/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeContext>
        <App />
      </ThemeContext>
    </Router>
  </React.StrictMode>,
);
