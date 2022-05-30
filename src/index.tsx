import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
//import multi from 'redux-multi';
import thunk from 'redux-thunk';
import rootReducers from './app/shared/redux/store';
import { Provider } from 'react-redux';


const store = applyMiddleware(promise, thunk)(createStore)(rootReducers);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
