import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@popperjs/core'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import {store} from './store';



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
  </BrowserRouter>
  </Provider>
  

,
  document.getElementById('root')
);


