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
    // Gestion de l'action signIn.pending (connexion)
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // gestion des valeurs / propriétées
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.user = {
          username: action.payload.username,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
        };
      })
      //rejet en cas d'erreur et message d'erreur
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = {
          status: action.payload.status,
          message: action.payload.message,
        };
      })
      //statut de l'utilisateur(user) pour la déconnexion
      .addCase(signOut.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export default authSlice.reducer;
