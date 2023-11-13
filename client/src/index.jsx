import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import {
  HashRouter,
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Web3Provider from "./contexts/Web3Provider";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <Web3Provider>
        <App />
      </Web3Provider>
    </HashRouter>
  </React.StrictMode>
);
