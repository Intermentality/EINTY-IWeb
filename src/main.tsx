import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter } from 'react-router-dom';
/* HashRouter only since I'm planning on a one page static. */

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      {/* Yeesh! */}
    </HashRouter>
  </React.StrictMode>,
  document.getElementById( 'root' ),
);