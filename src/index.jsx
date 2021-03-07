import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './scss/base/normalize.scss';
import './scss/base/base.scss';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from './store';

import { App } from './components/app/App';
import { ErrorBoundry } from './components/error-boundry';
import { ShowplaceService } from './services/showplaces-service';
import { ShowplaceServiceProvider } from './components/showplace-service-context';

const showplaceService = new ShowplaceService();

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <ShowplaceServiceProvider value={showplaceService}>
          <Router>
            <App />
          </Router>
        </ShowplaceServiceProvider>
      </ErrorBoundry>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
