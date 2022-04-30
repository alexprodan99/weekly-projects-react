import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import $ from 'jquery';
import Popper from 'popper.js';
import { Provider } from 'react-redux';
import getStorePersistor from './store';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';

const { store, persistor } = getStorePersistor();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </Router>
  </React.StrictMode>
);
