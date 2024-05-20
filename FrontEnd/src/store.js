import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; // Remplacez 'rootReducer' par votre rootReducer réel
import errorReducer from "./errorReducer"; // Importez votre errorReducer s'il est défini dans un autre fichier

const store = configureStore({
  reducer: {
    root: rootReducer,
    error: errorReducer, // Assurez-vous d'importer et de définir errorReducer correctement
  },
  devTools: true,
});

export default store;
