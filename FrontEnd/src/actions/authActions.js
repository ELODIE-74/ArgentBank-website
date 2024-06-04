import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    //appel API pour récupérer le token lors de l'authentification par le biais de l'email et du mot de passe
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Erreur lors de la connexion");
    }

    const data = await response.json();
    //affichage du jeton d'authentification (token)
    const token = data.token;
    localStorage.setItem("accessToken", token); // stockage du jeton
    return data;
  }
);
// Thunk pour récupérer le profil de l'utilisateur
export const fetchUserProfile = createAsyncThunk(
  "auth/fetchUserProfile",
  async (_, { getState, dispatch }) => {
    const { accessToken, username } = getState().auth;

    const response = await fetch(`http://localhost:3001/api/v1/user/profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ username }),
    });

    if (!response.ok) {
      // Si la réponse n'est pas ok, nous lançons une erreur
      const error = await response.json();
      throw new Error(error.message);
    }

    const data = await response.json();
    // Retourne les données contenant le profil de l'utilisateur
    return data;
  }
);
/*export const fetchUserProfile = createAsyncThunk(
  "auth/fetchUserProfile",
  async (_, { getState }) => {
    const { accessToken, id } = getState().auth;

    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ id }),
    });

    if (!response.ok) {
      // Si la réponse n'est pas ok, nous lançons une erreur
      throw new Error(
        "Erreur lors de la récupération du profil de l'utilisateur"
      );
    }

    const data = await response.json();
    // Retourne les données contenant le nom d'utilisateur (username)
    return data;
  }
);*/

/*export const fetchUserProfile = createAsyncThunk(
  "auth/fetchUserProfile",
  async (_, { getState }) => {
    const { accessToken, userName } = getState().auth;

    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ userName }),
    });

    if (!response.ok) {
      // Si la réponse n'est pas ok, nous lançons une erreur
      throw new Error(
        "Erreur lors de la récupération du profil de l'utilisateur"
      );
    }

    const data = await response.json();
    // Retourne les données contenant le nom d'utilisateur (username)
    return data;
  }
);*/

/*import { createAsyncThunk } from "@reduxjs/toolkit";

// Action pour la connexion
export const signIn = createAsyncThunk(
  "auth/signIn",
  async ({ email, password }, thunkAPI) => {
    try {
      // Appel API pour la connexion
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        // Gestion des erreurs de l'API, transmettre correctment au  reducer
        const error = await response.json();
        thunkAPI.rejectWithValue({ erreur: error.value });
        console.log(error);
      }

      const data = await response.json();
      return data.body.token;
    } catch (error) {
      // Gestion des erreurs réseau
      thunkAPI.rejectWithValue({ erreur: error.value });
      console.log(error);
    }
  }
);
*/
