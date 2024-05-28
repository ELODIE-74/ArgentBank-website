import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import updateprofilReducer from "./reducers/updateprofileReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    updateprofile: updateprofilReducer,
  },
});

export default store;
