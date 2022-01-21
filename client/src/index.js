import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applymiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

const store = createStore(reducers, compose(applymiddleware(thunk)))


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
