import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ContextState from './context/ContextState.js';
import { Provider } from "react-redux";
import store from './redux/store.js';
import AuthContextProvider from "./context/AuthContextProvider.js";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthContextProvider>
        <ContextState >
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ContextState>
      </AuthContextProvider>
    </Provider>
  </React.StrictMode>
);
