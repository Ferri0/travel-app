import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './scss/base/normalize.scss';
import './scss/base/base.scss';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from './store';

import { App } from './components/app/App';
import { ErroBoundry } from './components/error-boundry';
import { ShowplaceService } from './services';
import { ShowplacesServiceProvider } from './components/showplace-service-context';

const showplacesService = new ShowplaceService();

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <ErroBoundry>
        <ShowplacesServiceProvider value={showplacesService}>
          <Router>
            <App />
          </Router>
        </ShowplacesServiceProvider>
      </ErroBoundry>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
