import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as ThakurRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux-store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThakurRouter>
        <App />
      </ThakurRouter>
    </Provider>
  </React.StrictMode>
);
