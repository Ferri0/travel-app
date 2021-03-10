import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { MainPage, CountryPage } from '../pages';
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
        <Route render={() => <h2>Error, you made a mistake in the url path  </h2>} />
      </Switch>
      {/* <div>
        <ContainerElement />
      </div> */}
    </Router>
  );
}

export { App };
