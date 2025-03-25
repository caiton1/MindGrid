import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import './css/custom.css';
import './index.css'
import { ThemeProvider } from './stores/ThemeContext';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
