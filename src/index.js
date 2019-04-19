import React from "react";
import ReactDOM from "react-dom";
import history from './history'
import App from './App'
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore , applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'
import { routerMiddleware, push } from 'connected-react-router'
import { ConnectedRouter } from 'connected-react-router'
import {fetchUserRequest ,fetchUser} from './actions/auth'

const sagaMiddleware = createSagaMiddleware();
const routingMiddleware = routerMiddleware(history)

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
)
sagaMiddleware.run(rootSaga)

if(localStorage.getItem('jwt-access')) {
  store.dispatch(fetchUserRequest())
}

if(!localStorage.getItem('jwt-access')) {
  //  store.dispatch(push('/'))
    store.dispatch(fetchUserRequest())
}else {
  localStorage.removeItem('publicKey')
  store.dispatch(fetchUser({}))
}


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route component={App}/>
      </ConnectedRouter>
    </Provider>
  </BrowserRouter>
,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
