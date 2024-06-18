import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

/**Le composant Provider de Redux est utilisé pour injecter le store Redux dans l'arbre des composants.
Enfin, le composant racine App est rendu dans le Provider. */
