import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/layouts.scss/_index.scss";
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
