import React from "react";
import ReactDOM from "react-dom/client";
import Portfolio from "./Portfolio";
import "./index.css"; // global CSS

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);
