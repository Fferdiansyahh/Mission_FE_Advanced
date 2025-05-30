import { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HasilUjianProvider } from "./data/HasilUjianContext.jsx";
import { store } from "./store/redux/store.js";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Provider store={store}>
      <HasilUjianProvider>
        <App />
      </HasilUjianProvider>
    </Provider>
  </StrictMode>
);
