import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../main-page';
import CountryPage from '../country-page';
import ContainerElement from '../containers/block-one-container';

function App() {
  return (
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
    <div>
      <ContainerElement />
    </div>
  );
}

export { App };
