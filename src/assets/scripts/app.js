// app.js

import "../scss/app.scss";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/App";

import thunk from "redux-thunk";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import appReducer from "./reducers/app-reducer";

const store = createStore(appReducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
