import React from 'react';
import { Route, Switch } from 'react-router-dom'
import LayoutTable from 'pages/table/LayoutTable';
import LayoutTeam from 'pages/team/LayoutTeam';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LayoutTable} />
        <Route
          path="/team/:teamId"
          render={props =>
            (<LayoutTeam id={Number(props.match.params.teamId)}></LayoutTeam>)
          }
        />
      </Switch>
    </div>
  );
}

export default App;
