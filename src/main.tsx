import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { HashRouter } from 'react-router-dom';
import { App } from './app';
/* HashRouter only since I'm planning on a one page static. */

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>
)