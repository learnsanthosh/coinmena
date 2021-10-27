import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import createHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import App from './App';
import reportWebVitals from './reportWebVitals';
const history = createHistory()
const store = configureStore(history)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />  
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
