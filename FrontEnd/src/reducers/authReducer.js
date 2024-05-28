import { createSlice } from "@reduxjs/toolkit";
import { signIn, signOut } from "../actions/authActions";

// Définition de l'état initial du Slice
const initialState = {
  user: null,
  loading: false,
  error: null,
};

// Création du Slice "auth" avec les reducers
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder;
    // Gestion de l'action signIn.pending
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.user = {
          username: action.payload.username,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
        };
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = {
          status: action.payload.status,
          message: action.payload.message,
        };
      })
      .addCase(signOut.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export default authSlice.reducer;
