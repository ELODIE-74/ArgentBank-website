// actions/userActions.js
export const UPDATE_USER_PROFILE_REQUEST = "UPDATE_USER_PROFILE_REQUEST";
export const UPDATE_USER_PROFILE_SUCCESS = "UPDATE_USER_PROFILE_SUCCESS";
export const UPDATE_USER_PROFILE_FAILURE = "UPDATE_USER_PROFILE_FAILURE";

export const updateUserProfile = (updatedUserInfo) => async (dispatch) => {
  dispatch({ type: UPDATE_USER_PROFILE_REQUEST });

  try {
    // Appel API pour mettre à jour le profil de l'utilisateur
    const response = await fetch("http://localhost:3001/api/v1/user/profil", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUserInfo),
    });

    if (!response.ok) {
      throw new Error("Erreur lors de la mise à jour du profil");
    }

    const data = await response.json();
    dispatch({ type: UPDATE_USER_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_USER_PROFILE_FAILURE, payload: error.message });
  }
};
