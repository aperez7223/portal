import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "es6-promise";
import "babel-polyfill";

//Create Redux Store (State)
export const store = createStore(
  rootReducer,
  compose(
    //Thunk applies Asynchronous Capability to Redux
    applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);




ReactDOM.render(
  //Setup Base Component Provider which utilizes the store we created above
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
