import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { BaseCSS } from "styled-bootstrap-grid";

import "./assets/styles/main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
      <BaseCSS />
    </HashRouter>
  </React.StrictMode>
);
