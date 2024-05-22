import { createAsyncThunk } from "@reduxjs/toolkit";

// Action pour la connexion
export const signIn = createAsyncThunk(
  "auth/signIn",
  async (credentials, { rejectWithValue }) => {
    try {
      // Appel API pour la connexion
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        // Gestion des erreurs de l'API, transmettre correctment au  reducer
        const error = await response.json();
        return rejectWithValue(error);
      }

      const user = await response.json();
      return user;
    } catch (error) {
      // Gestion des erreurs réseau
      return rejectWithValue(error.message);
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
