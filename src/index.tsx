import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, HashRouter } from "react-router-dom";
// import { store } from "./store/store";
import { setupStore } from "./store/store";
import App from "./App";
import "./index.css";

const store = setupStore();

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/login-page-contact-list">
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
