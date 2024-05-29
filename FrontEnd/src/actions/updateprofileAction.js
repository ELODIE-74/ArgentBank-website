// actions/updateprofilAction.js
import { createAsyncThunk } from "@reduxjs/toolkit";

export const UPDATE_USER_PROFILE_START = "UPDATE_USER_PROFILE_START"; // début de requête de mse à jour (demande d'envoi)
export const UPDATE_USER_PROFILE_SUCCESS = "UPDATE_USER_PROFILE_SUCCESS"; // si  réponse API retourne OK = success
export const UPDATE_USER_PROFILE_ERROR = "UPDATE_USER_PROFILE_ERROR"; // gestion des erreurs dans la requête en cas d'échec

// Action asynchrone pour la mise à jour du profil de l'utilisateur
export const updateUserProfile = createAsyncThunk(
  "user/updateProfile",
  async (updatedUserInfo, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profil", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUserInfo),
      });

      if (!response.ok) {
        const error = await response.json();
        return thunkAPI.rejectWithValue({ erreur: error.value });
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ erreur: error.message });
    }
  }
);

//mettre une méthode asynchrone pour mieux gérer les promesses, début de requête
/*export const updateUserProfile = (updatedUserInfo) => async (dispatch) => {
  dispatch({ type: UPDATE_USER_PROFILE_START });

  try {
    // Appel API pour mettre à jour le profil de l'utilisateur
    const response = await fetch("http://localhost:3001/api/v1/user/profil", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUserInfo),
    });
    //si la réponse n'est pas correcte, gestion de l'erreur et affichage du message
    if (!response.ok) {
      throw new Error("Erreur lors de la mise à jour du profil");
    }
    //si ok réussi, mise a jour et envoie des nouvelles données
    //mettre un message de confirmation d'envoi réussi pour l'utlisateur
    const data = await response.json();
    dispatch({ type: UPDATE_USER_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_USER_PROFILE_ERROR, payload: error.message });
  }
};*/
