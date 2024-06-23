import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUsername } from "../../actions/authActions";
import "../EditUserInfo/EditUserinfo.css";
const EditUserInfo = () => {
  const { userProfile, accessToken } = useSelector((state) => state.auth);
  const { firstName, lastName, userName } = userProfile;
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [username, setUsername] = useState(userName);
  const [initialUsername, setInitialUsername] = useState(userName);
  const [isLoading, setIsLoading] = useState(false);

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

  //Met à jour la valeur de initialUsername avec la nouvelle valeur de username
  const handleSave = async () => {
    try {
      setIsLoading(true);
      await dispatch(updateUsername({ accessToken, userName: username }));
      setMessage("Informations enregistrées avec succès !");
      setIsFormVisible(false);
      setInitialUsername(username);
    } catch (error) {
      setMessage("Une erreur est survenue lors de l'enregistrement.");
    } finally {
      setIsLoading(false);
    }
  };

  //Met à jour le message pour indiquer que les modifications ont été annulées
  const handleCancel = () => {
    setMessage("Modifications annulées.");
    setIsFormVisible(false);
    setUsername(initialUsername);
  };

  //retourne le rendu conditionnel du bouton "Edit User Info" ou du formulaire d'édition en fonction de la valeur de isFormVisible.
  return (
    <div>
      {!isFormVisible && (
        <button onClick={handleEditName}>Edit User Info</button>
      )}
      {isFormVisible && (
        <form className="form-group edit-user-info">
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" value={lastName} />
          </div>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
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
/*import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUsername } from "../../actions/authActions";
import "../EditUserInfo/EditUserinfo.css";
const EditUserInfo = () => {
  const { userProfile, accessToken } = useSelector((state) => state.auth);
  const { firstName, lastName, userName } = userProfile;
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [username, setUsername] = useState(userName);
  const [isLoading, setIsLoading] = useState(false);

  const handleEditName = () => {
    setIsFormVisible(true);
    setUsername(userName);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSave = async () => {
    try {
      setIsLoading(true);
      await dispatch(updateUsername({ accessToken, userName: username }));
      setMessage("Informations enregistrées avec succès !");
      setIsFormVisible(false);
    } catch (error) {
      setMessage("Une erreur est survenue lors de l'enregistrement.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setMessage("Modifications annulées.");
    setIsFormVisible(false);
  };

  return (
    <div>
      {!isFormVisible && (
        <button onClick={handleEditName}>Edit User Info</button>
      )}
      {isFormVisible && (
        <form className="form-group edit-user-info">
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" value={lastName} />
          </div>
          <div>
            <label htmlFor="userName">UserName:</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={userName}
              onChange={handleUsernameChange}
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

export default EditUserInfo;*/
/*import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUsername } from "../../actions/authActions";
import "../EditUserInfo/EditUserinfo.css";

const EditUserInfo = () => {
  const { userProfile, accessToken } = useSelector((state) => state.auth);
  const { firstName, lastName, userName } = userProfile;
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [username, setUsername] = useState(userName);
  //console.log(userProfile);
  //console.log(accessToken);
  //affichage du formulaire
  function handleEditName() {
    setIsFormVisible(true);
    setUsername(userName);
  }

  //changelement du userName, nouvelle valeur
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSave = async () => {
    try {
      await dispatch(updateUsername({ accessToken, userName }));
      setMessage("Informations enregistrées avec succès !");
      setIsFormVisible(false);
    } catch (error) {
      setMessage("Une erreur est survenue lors de l'enregistrement.");
    }
  };

  const handleCancel = () => {
    setMessage("Modifications annulées.");
    setIsFormVisible(false);
  };

  return (
    <form
      className={`form-group edit-user-info ${
        isFormVisible ? "form-visible" : ""
      }`}
    >
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" value={firstName} />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" value={lastName} />
      </div>
      <div>
        <label htmlFor="userName">UserName:</label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={userName}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="buttons">
        <button className="save-btn" onClick={handleSave}>
          Save
        </button>
        <button className="cancel-btn" onClick={handleCancel}>
          Cancel
        </button>
      </div>
      {message && <div>{message}</div>}
    </form>
  );
};

export default EditUserInfo;*/
