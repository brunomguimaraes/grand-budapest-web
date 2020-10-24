import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from './config/routes/routes';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
