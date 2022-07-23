import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import App from "./App";
import { HashRouter } from "react-router-dom";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);
