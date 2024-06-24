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
  const [message, setMessage] = useState(""); //affichage des messages
  const [isFormVisible, setIsFormVisible] = useState(false); //contrôle l'affichage du formulaire d'édition.
  const [username, setUsername] = useState(userName); //stockent la valeur du nom d'utilisateur.
  const [initialUsername, setInitialUsername] = useState(userName); //stockent la valeur du nom d'utilisateur initiale.
  const [isLoading, setIsLoading] = useState(false); //indique si une action est en cours

  /**est appelée lorsque l'utilisateur clique sur le bouton "Edit User Info".
   * Elle affiche le formulaire d'édition en mettant isFormVisible à true et
   * initialise username et initialUsername avec la valeur actuelle du userName. */
  const handleEditName = () => {
    setIsFormVisible(true);
    setUsername(userName);
    setInitialUsername(userName);
  };

  /**appelée lorsque l'utilisateur modifie la valeur du champ username.
   * Elle met à jour la valeur de username en conséquence. */
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  /*Met à jour la valeur de initialUsername avec la nouvelle valeur de username.
  Il dispatch l'action updateUsername avec accessToken et la nouvelle valeur de username.
  met à jour message pour indiquer que les informations ont été enregistrées avec succès.*/
  const handleSave = async () => {
    try {
      setIsLoading(true);
      await dispatch(updateUsername({ accessToken, userName: username }));
      setMessage("Informations enregistrées avec succès !");
      setIsFormVisible(false); //masque le formulaire a la fermeture
      setInitialUsername(username); //met à jour initialUsername avec la nouvelle valeur de username.
    } catch (error) {
      setMessage("Une erreur est survenue lors de l'enregistrement."); //met à jour message pour indiquer que l'enregistrement a échoué.
    } finally {
      setIsLoading(false);
    }
  };

  //Met à jour le message pour indiquer que les modifications ont été annulées
  const handleCancel = () => {
    setMessage("Modifications annulées.");
    setIsFormVisible(false); //masque le formulaire a la fermeture
    setUsername(initialUsername); //restaure la valeur de username avec la valeur initiale de initialUsername
  };

  //retourne le rendu conditionnel du bouton "Edit User Info" ou du formulaire d'édition en fonction de la valeur de isFormVisible.
  return (
    <div className="divdesignformulaire">
      {!isFormVisible && (
        <button className="edit-button" onClick={handleEditName}>
          Edit User Info
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
          {message && <div>{message}</div>}
        </form>
      )}
    </div>
  );
};
export default EditUserInfo;
