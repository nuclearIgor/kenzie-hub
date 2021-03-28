import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.css";

import { App } from "./app";
import {BrowserRouter} from "react-router-dom";

import {UsersProvider} from "./context/UsersContext/UsersContext";
import {AuthProvider} from "./context/AuthContext/AuthContext";

ReactDOM.render(
  <React.StrictMode>
      <AuthProvider>
          <UsersProvider>
              <BrowserRouter>
                  <App />
              </BrowserRouter>
          </UsersProvider>
      </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
