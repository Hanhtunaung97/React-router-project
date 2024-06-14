import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProviderStore from "./store/ProviderStore.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProviderStore>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </ProviderStore>
);
