import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore} from "redux";
import {logger} from "redux-logger";
import rootReducer from "./Reducers/index";
import {Provider} from "react-redux";
import "./Assets/Styles/index.scss";

const store = createStore(rootReducer, applyMiddleware(logger));
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
