import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import './css/custom.css';
import './index.css'
import { ThemeProvider } from './stores/ThemeContext';
import { EditModeProvider } from './stores/EditModeConstext';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <EditModeProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </EditModeProvider>
  </React.StrictMode>
);
