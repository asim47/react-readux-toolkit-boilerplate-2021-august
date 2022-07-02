import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/styles.scss"
// import * as serviceWorker from './serviceWorker';


const container = document.getElementById('root')

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
