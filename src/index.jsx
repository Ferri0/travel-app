import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './scss/base/normalize.scss';
import './scss/base/base.scss';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from './store';

import { App } from './components/app/App';
import { ErroBaundry } from './components/error-baundry';
import {ShowplaceService} from './services';
import { ShowplacesServiceProvider } from './showplaces-service-provider';

const showplacesService = new ShowplaceService();

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <ErrorBaundry>
        <ShowplacesServiceProvider value={showplacesService}>
          <Router>
            <App />
          </Router>
        </ShowplacesServiceProvider>
      </ErrorBaundry>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
