import { createSlice } from "@reduxjs/toolkit";
import { login } from "../actions/authActions";
// Importez l'action 'login'
import { fetchUserProfile } from "../actions/authActions";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: null,
    username: null,
    status: "idle", //C'est l'état initial avant que l'action asynchrone ne soit déclenchée.
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.accessToken = null;
      state.username = null;
      localStorage.removeItem("accessToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.accessToken = action.payload.token;
        state.status = "succeeded";
        state.user = action.payload.user;
      })

      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.username = action.payload.username;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
/*const authSlice = createSlice({
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

export default authSlice.reducer;*/
