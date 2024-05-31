import { createSlice } from "@reduxjs/toolkit";
import { login } from "../actions/authActions";
// Importez l'action 'login'

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    // Autres réducteurs si nécessaire
  },
  extraReducers: (builder) => {
    builder
      //gestion de l'état de la connexion
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      //gestion de la connexion réussi avec redirection sur la page user
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      //gestion de l'état en cas d'erreur lors de l'authentification
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
