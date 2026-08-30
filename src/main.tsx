import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// HashRouter is used deliberately: GitHub Pages serves static files with
// no server-side rewrite rules, so a normal BrowserRouter would 404 on
// refresh/deep-link. Hash-based routes (e.g. /#/schemes) always resolve
// to index.html, so every route works reliably with zero server config.
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
