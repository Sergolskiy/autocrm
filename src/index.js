import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from 'react-redux'
import reduxThunk from 'redux-thunk'
import rootReducer from './store/reducers/rootReducer'
import { IntlProvider } from 'react-intl-redux'
import localRu from './languages/ru'
import {BrowserRouter} from "react-router-dom";


const initialState = {
  intl: {
    locale: 'ru',
  },
}

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const loggerMiddleware = store => next => action =>{
  const result = next(action)
  console.log('Middleware', store.getState());
  return result
}

const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(
  loggerMiddleware,
  reduxThunk
)))

const app = (
  <Provider store={store}>
    <IntlProvider locale={'ru'} messages={localRu}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IntlProvider>
  </Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
