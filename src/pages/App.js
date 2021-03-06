import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import routes from './routes';


function App() {
  return (
    <div className="App">
      <Switch>
        {routes.map((route) =>
          <Route exact={route.exact} path={route.path} component={route.component} key={route.path} />
        )}
        <Redirect from="/" to="/home" />
      </Switch>
    </div>
  );
}

export default App;
