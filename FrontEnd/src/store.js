//configuration du store Redux pour l'application.
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";

//La fonction configureStore est appelée pour créer le store Redux.
const store = configureStore({
  // associe la clé auth au réducteur authReducer.
  //l'état de l'authentification sera accessible sous la clé auth dans le state global du store.
  reducer: {
    //gére l'état lié à l'authentification de l'utilisateur.
    auth: authReducer,
  },
});

export default store;
