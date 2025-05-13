import { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HasilUjianProvider } from "./data/HasilUjianContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <HasilUjianProvider>
      <App />
    </HasilUjianProvider>
  </StrictMode>
);
