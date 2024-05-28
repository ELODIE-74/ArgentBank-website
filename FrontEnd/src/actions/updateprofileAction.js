// actions/updateprofilAction.js
// début de requête de mse à jour (demande d'envoi)
export const UPDATE_USER_PROFILE_START = "UPDATE_USER_PROFILE_START";
// si  réponse API retourne OK = success
export const UPDATE_USER_PROFILE_SUCCESS = "UPDATE_USER_PROFILE_SUCCESS";
// gestion des erreurs dans la requête en cas d'échec
export const UPDATE_USER_PROFILE_ERROR = "UPDATE_USER_PROFILE_ERROR";

//mettre une méthode asynchrone pour mieux gérer les promesses, début de requête
export const updateUserProfile = (updatedUserInfo) => async (dispatch) => {
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
};
