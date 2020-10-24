import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import App from '../../views/App';



const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={App} path="/" exact />
      {/* <Route component={CreatePoint} path="/create-point" /> */}
    </BrowserRouter>
  )
}

export default Routes;