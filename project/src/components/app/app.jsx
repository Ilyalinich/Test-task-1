import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import {AppRoute} from '../../constant';
import Catalog from '../catalog/catalog';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.CATALOG} component={Catalog} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
