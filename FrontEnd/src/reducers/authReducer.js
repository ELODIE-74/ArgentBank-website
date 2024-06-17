//fichier authReducer
import { createSlice } from "@reduxjs/toolkit";
import { login, fetchUserProfile } from "../actions/authActions";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: null,
    userProfile: {
      id: null,
      email: null,
      firstName: null,
      lastName: null,
      userName: null,
    },
    status: "idle",
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.accessToken = null;
      state.userProfile = {
        id: null,
        email: null,
      };
      localStorage.removeItem("accessToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.accessToken = action.payload.body.token;
        state.status = "succeeded";
        state.userProfile = action.payload.user;
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
        state.userProfile = {
          id: action.payload.id,
          email: action.payload.email,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          userName: action.payload.userName,
        };
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
