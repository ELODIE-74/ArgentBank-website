import { createSlice } from "@reduxjs/toolkit";
import { signIn, signOut } from "../actions/authActions";

//initialise l'état du Slice avec ces propriétées
const initialState = {
  user: null,
  loading: false,
  error: null,
};

//gestion connexion / déconnexion + mise a jour de l'état(fullfiled), état user=null (indique sa déconnexion)
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
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
    /*.addCase(updateUserInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.user = {
          ...state.user,
          username: action.payload.username,
          firstname: action.payload.firstname,
          lastname: action.payload.lastname,
        };
      })
      .addCase(updateUserInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = {
          status: action.payload.status,
          message: action.payload.message,
        };
      });
      
      */
  },
});

export default authSlice.reducer;
