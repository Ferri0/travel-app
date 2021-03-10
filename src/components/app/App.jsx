import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from '../main-page';
import CountryPage from '../country-page';
// import ContainerElement from '../containers/block-one-container';

function App() {
  return (
    <Router>
      <Switch>
        {/* main page */}
        <Route exact path="/">
          <MainPage />
        </Route>
        {/* country page */}
        <Route path="/country">
          <CountryPage />
        </Route>
      </Switch>
      {/* <div>
        <ContainerElement />
      </div> */}
    </Router>
  );
}

export { App };
