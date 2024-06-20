//fichier authReducer
//importe la fonction createSlice du package @reduxjs/toolkit. Cette fonction permet de créer un "tranche" (slice) de l'état Redux.
import { createSlice } from "@reduxjs/toolkit";
//import des deux actions asynchrones définies dans le fichier authActions.js.
import {
  login,
  fetchUserProfile,
  updateUsername,
} from "../actions/authActions";

//crée une nouvelle "tranche" (slice) de l'état Redux pour la gestion de l'authentification.
const authSlice = createSlice({
  name: "auth", //name: "auth" : Définit le nom de la tranche.
  initialState: {
    //Définit l'état initial de la tranche.
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
  //Définit les réducteurs synchrones pour la tranche.
  reducers: {
    logout: (state) => {
      /**fonction qui réinitialise l'état de la tranche en mettant accessToken à null,
       * en réinitialisant userProfile et en supprimant le jeton d'authentification du localStorage. */
      state.accessToken = null;
      state.userProfile = {
        id: null,
        email: null,
      };
      localStorage.removeItem("accessToken");
    },
  },
  //Définit les réducteurs asynchrones pour la tranche
  extraReducers: (builder) => {
    builder
      /*Met à jour l'état avec le jeton d'authentification et les données de l'utilisateur 
      lorsque l'action login est accomplie avec succès.*/
      .addCase(login.fulfilled, (state, action) => {
        state.accessToken = action.payload.body.token;
        state.status = "succeeded";
        state.userProfile = action.payload.user;
      })
      //Met à jour l'état avec le statut "failed" et le message d'erreur lorsque l'action login échoue.
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      //Met à jour l'état avec le statut "loading" lorsque l'action fetchUserProfile est en cours.
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = "loading";
      })
      //Met à jour l'état avec les données de l'utilisateur lorsque l'action fetchUserProfile est accomplie avec succès.
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userProfile = {
          id: action.payload.body.id,
          email: action.payload.body.email,
          firstName: action.payload.body.firstName,
          lastName: action.payload.body.lastName,
          userName: action.payload.body.userName,
        };
      })
      //Met à jour l'état avec le statut "failed" et le message d'erreur lorsque l'action fetchUserProfile échoue.
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateUsername.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUsername.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userProfile = {
          ...state.userProfile,
          userName: action.payload.body.userName,
        };
      })
      .addCase(updateUsername.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default authSlice.reducer;
