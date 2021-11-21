import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import RootStore from "./store";
import { CssBaseline } from "@material-ui/core";

const store = RootStore.create({});

export const StoreContext = createContext(store);

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <CssBaseline />
    <App />
  </StoreContext.Provider>,
  document.getElementById("root") || document.createElement("div") // for testing purposes
);
