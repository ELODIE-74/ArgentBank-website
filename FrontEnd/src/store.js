import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    // Autres réducteurs de votre application
  },
});

export default store;
