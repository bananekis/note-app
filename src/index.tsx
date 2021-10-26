import "./index.css";
import { Provider as AlertProvider, positions, transitions } from "react-alert";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { persistor, store } from "../src/state/store";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
//@ts-ignore
import AlertTemplate from "react-alert-template-basic";

const alertOptions = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE,
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </AlertProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
