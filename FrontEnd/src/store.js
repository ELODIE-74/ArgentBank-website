import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";

//création du store redux(configureStore)
const store = configureStore({
  reducer: {
    auth: authReducer, //intégre le reducer de l'authentification dans le store global.
    // Autres réducteurs de l'application
  },
});

export default store;
