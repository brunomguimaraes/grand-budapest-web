import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Routes from './config/routes/routes';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
