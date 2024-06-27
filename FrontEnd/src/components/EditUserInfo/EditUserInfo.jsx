import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUsername } from "../../actions/authActions";
import "../EditUserInfo/EditUserinfo.css";

const EditUserInfo = () => {
  const { userProfile, accessToken } = useSelector((state) => state.auth); //extraits du store Redux à l'aide de useSelector.
  const { firstName, lastName, userName } = userProfile; //extraits de userProfile
  const dispatch = useDispatch(); //fonction utilisée pour dispatche des actions Redux.
  //useDispatch et useSelector sont des hooks Redux utilisés pour interagir avec le store Redux.

  //useState et useEffect sont des hooks React utilisés pour gérer l'état et les effets de bord.
  const [isFormVisible, setIsFormVisible] = useState(false); //contrôle l'affichage du formulaire d'édition.
  const [username, setUsername] = useState(userName); //stockent la valeur du nom d'utilisateur.
  const [initialUsername, setInitialUsername] = useState(userName); //stockent la valeur du nom d'utilisateur initiale.
  const [isLoading, setIsLoading] = useState(false); //indique si une action est en cours

  /**
   * Cette méthode est appelée lorsque l'utilisateur clique sur le bouton "Edit Name".
   * Elle affiche le formulaire d'édition en mettant isFormVisible à true et
   * initialise username et initialUsername avec la valeur actuelle du userName.
   */
  const handleEditName = () => {
    setIsFormVisible(true);
    setUsername(userName);
    setInitialUsername(userName);
  };

  /**
   * Cette méthode est appelée lorsque l'utilisateur modifie la valeur du champ username.
   * Elle met à jour la valeur de username en conséquence.
   */
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  /**
   * Cette méthode met à jour la valeur de initialUsername avec la nouvelle valeur de username.
   * Elle dispatche l'action updateUsername avec accessToken et la nouvelle valeur de username.
   * Elle met à jour le message pour indiquer que les informations ont été enregistrées avec succès.
   */
  const handleSave = async () => {
    try {
      setIsLoading(true);
      await dispatch(updateUsername({ accessToken, userName: username }));
      setIsFormVisible(false);
      setInitialUsername(username);
    } catch (error) {
      setMessage("Une erreur est survenue lors de l'enregistrement.");
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Cette méthode met à jour le message pour indiquer que les modifications ont été annulées.
   */
  const handleCancel = () => {
    setIsFormVisible(false);
    setUsername(initialUsername);
  };

  /**
   * Cette méthode retourne le rendu conditionnel du bouton "Edit Name" ou du formulaire d'édition en fonction de la valeur de isFormVisible.
   */
  return (
    <div className="divdesignformulaire">
      {!isFormVisible && (
        <button className="edit-button" onClick={handleEditName}>
          Edit Name
        </button>
      )}

      {isFormVisible && (
        <form className="form-group edit-user-info">
          <h1>Edit user info</h1>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              readOnly
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              readOnly
            />
          </div>

          <div className="buttons">
            <button
              type="button"
              className="save-btn"
              onClick={handleSave}
              disabled={isLoading}
            >
              {isLoading ? "Saving..." : "Save"}
            </button>
            <button
              type="button"
              className="cancel-btn"
              onClick={handleCancel}
              disabled={isLoading}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default EditUserInfo;
