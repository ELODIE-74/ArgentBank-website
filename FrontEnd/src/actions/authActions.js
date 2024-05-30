import { createAsyncThunk } from "@reduxjs/toolkit";

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

// Action pour la déconnexion
export const signOut = createAsyncThunk("auth/signOut", async () => {
  // Appel API pour la déconnexion
  await fetch("/api/logout", {
    method: "POST",
  });

  // Retourne un objet vide pour indiquer que la déconnexion a réussi
  return {};
});
