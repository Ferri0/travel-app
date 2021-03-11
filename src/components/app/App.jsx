import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { MainPage, CountryPage } from '../pages';
// import ContainerElement from '../containers/block-one-container';

function App() {
  return (
    <Router>
      <Switch>
        {/* main page */}
        <Route exact path="/" component={MainPage} />
        {/* country page */}
        {/* <Route path="/:id" children={CountryPage} /> */}
        <Route exact path="/:country" 
          component={CountryPage}
        />
        <Route render={() => <h2>Error, you made a mistake in the url path  </h2>} />
      </Switch>
      {/* <div>
        <ContainerElement />
      </div> */}
    </Router>
  );
}

export { App };
