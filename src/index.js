import React from "react";
import ReactDOM from "react-dom";
import {createHistory} from './history'
import App from './App'
import { BrowserRouter, Route, Router } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore , applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)
const createdHistory = createHistory(store)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <BrowserRouter history={createdHistory}>
    <Provider store={store}>
      <Route component={App}/>
    </Provider>
  </BrowserRouter>
,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
