import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App.jsx";
import { Provider } from 'react-redux';
import store from './store.js';

const rootElement = document.querySelector("#root");

ReactDOM.render(<Provider store={store}><App/></Provider>, rootElement)