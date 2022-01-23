// Third Parties
import ReactDOM from "react-dom";
import { StrictMode } from "react";

// Styles
import "./styles/globals.scss";

// App
import App from "./App";

/**
 * Render React App
 */
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
