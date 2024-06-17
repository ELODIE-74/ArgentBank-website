//fichier authActions
import { createAsyncThunk } from "@reduxjs/toolkit";

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
    const token = data.body.token;
    //vérification du jeton d'authentification
    console.log("accessToken", token);
    localStorage.setItem("accessToken", token); // stockage du jeton

    return data;
  }
);
//Avec cette modification, la fonction fetchUserProfile retourne directement l'objet userData complet dans la réponse de l'api.
export const fetchUserProfile = createAsyncThunk(
  "auth/fetchUserProfile",
  async (accessToken) => {
    if (!accessToken) {
      throw new Error("Aucun jeton d'authentification trouvé");
    }

    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      const userData = await response.json();

      return userData;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
/*export const fetchUserProfile = createAsyncThunk(
  "auth/fetchUserProfile",
  async (accessToken) => {
    if (!accessToken) {
      throw new Error("Aucun jeton d'authentification trouvé");
    }

    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      const userData = await response.json();
      const { id, email, firstName, lastName, userName } = userData;
      const userProfileData = {
        id,
        email,
        firstName,
        lastName,
        userName,
      };
      debugger; // point d'arrêt 2
      return userProfileData;
    } catch (error) {
      debugger; // point d'arrêt 3
      throw new Error(error.message);
    }
  }
);*/
//appel api pour récupérer les données du profil utilisateur
/*export const fetchUserProfile = createAsyncThunk(
  "auth/fetchUserProfile",
  async (accessToken) => {
    //récupération du jeton d'authentification
    console.log("accessToken", accessToken);
    //si jeton pas trouvé (token)
    if (!accessToken) {
      throw new Error("Aucun jeton d'authentification trouvé");
    }
    // appel api des données utlisateur
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      // si requête aboutit pas, renvoie un message d'erreur
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }
      // récupération et utlisation des propriétés dans différents composants
      const userData = await response.json();
      const { email, firstName, lastName, userName } = userData; // Extraction des données spécifiques du profil utilisateur
      // variable qui contient les propriétés de l'utlisateur
      const userProfileData = {
        email,
        firstName,
        lastName,
        userName,
      };
      return userProfileData; // Renvoie les données du profil utilisateur
    } catch (error) {
      throw new Error(error.message); //si mauvais renvoie des données
    }
  }
);*/
/*import { createAsyncThunk } from "@reduxjs/toolkit";

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
export const fetchUserProfile = createAsyncThunk(
  "auth/fetchUserProfile",
  async () => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    const response = await fetch(`http://localhost:3001/api/v1/user/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const data = await response.json();
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
