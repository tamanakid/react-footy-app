import React from 'react';
import { Route, Switch } from 'react-router-dom'
import routes from './routes';
import './App.scss';


function App() {
  return (
    <div className="App">
      <Switch>
        {routes.map((route) =>
          <Route exact={route.exact} path={route.path} component={route.component} />
        )}
      </Switch>
    </div>
  );
}

export default App;
