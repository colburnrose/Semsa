import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// CSS: Imports
import "bootstrap/dist/css/bootstrap.css";

import { createStore } from "redux";
import rootReducer from "./reducers/index";
import { Provider } from "react-redux";

// 3. Combine multiple reducers
// 4. create redux store
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
