//fichier authActions
import { createAsyncThunk } from "@reduxjs/toolkit"; //Cette fonction permet de créer des actions asynchrones pour Redux.

/*action asynchrone appelée login. Lorsque cette action est déclenchée, elle effectue une requête POST 
sur l'endpoint http://localhost:3001/api/v1/user/login avec l'email et le mot de passe fournis en paramètres.*/
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
    //Si la réponse n'est pas réussi lors de l'appel, affichage d'un message d'erreur.
    if (!response.ok) {
      throw new Error("Erreur lors de la connexion");
    }
    //Si la réponse est ok (code HTTP 200), elle extrait le jeton d'authentification (token) de la réponse et le stocke dans le localStorage.
    const data = await response.json();
    //affichage du jeton d'authentification (token)
    const token = data.body.token;
    //vérification du jeton d'authentification
    console.log("accessToken", token);
    localStorage.setItem("accessToken", token); // stockage du jeton
    //l'action (appel API) retourne les données complètes de la réponse.
    return data;
  }
);
/* autre action asynchrone appelée fetchUserProfile. Lorsque cette action est déclenchée, elle effectue une requête POST 
sur l'endpoint http://localhost:3001/api/v1/user/profile en envoyant le jeton d'authentification dans l'en-tête "Authorization".*/
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
      //Si le jeton d'authentification n'est pas fourni, affichage d'un message d'erreur.
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }
      //Avec cette modification, la fonction fetchUserProfile retourne directement l'objet userData complet dans la réponse de l'api.
      const userData = await response.json();
      console.log(userData);
      //Si la réponse est ok (code HTTP 200), elle extrait les données de l'utilisateur de la réponse et les retourne.
      return userData;
    } catch (error) {
      throw new Error(error.message); //Si la réponse n'est pas ok, elle extrait le message d'erreur de la réponse affiche l'erreur.
    }
  }
);
// mise à jour et envoi à Swagger du nouveau userName
export const updateUsername = createAsyncThunk(
  "auth/updateUsername",
  async ({ accessToken, userName }) => {
    // Destructurez l'objet contenant accessToken et userName
    try {
      const response = await fetch(
        `http://localhost:3001/api/v1/user/profile`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ userName }),
        }
      );

      // Si le jeton d'authentification n'est pas fourni, affichage d'un message d'erreur.
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      // Avec cette modification, la fonction updateUsername retourne directement l'objet updateUserData complet dans la réponse de l'API.
      const updateUserData = await response.json();

      // Si la réponse est ok (code HTTP 200), elle extrait les données de l'utilisateur de la réponse et les retourne.
      return updateUserData;
    } catch (error) {
      throw new Error(error.message); // Si la réponse n'est pas ok, elle extrait le message d'erreur de la réponse et affiche l'erreur.
    }
  }
);
/*//mise a jour et envoie a swagger du nouveau userName
export const updateUsername = createAsyncThunk(
  "auth/updateUsername",
  async (accessToken, { userName }) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/v1/user/profile`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ userName }),
        }
      );

      //Si le jeton d'authentification n'est pas fourni, affichage d'un message d'erreur.
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }
      //Avec cette modification, la fonction fetchUserProfile retourne directement l'objet userData complet dans la réponse de l'api.
      const updateUserData = await response.json();
      //Si la réponse est ok (code HTTP 200), elle extrait les données de l'utilisateur de la réponse et les retourne.
      return updateUserData;
    } catch (error) {
      throw new Error(error.message); //Si la réponse n'est pas ok, elle extrait le message d'erreur de la réponse affiche l'erreur.
    }
  }
);*/
/*export const updateUsername = createAsyncThunk(
  "auth/ updateUsername",
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
      );*/
