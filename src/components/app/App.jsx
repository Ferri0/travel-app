import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Element from '../block-one';
import ShowplaceService from '../../services';
import MainPage from '../main-page';
import CountryPage from '../country-page';

function App() {
  const showplacesService = new ShowplaceService();
  const [data, setData] = useState([]);
  useEffect(() => {
    showplacesService.getCountry('italy').then((res) => setData(res));
  }, []);
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
        <Element data={data} />
      </div> */}
    </Router>
  );
}

export default App;
