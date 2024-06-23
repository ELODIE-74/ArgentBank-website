import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUsername } from "../../actions/authActions";
import "../EditUserInfo/EditUserinfo.css";

const EditUserInfo = () => {
  const { userProfile, accessToken } = useSelector((state) => state.auth);
  console.log(userProfile);
  console.log(accessToken);
  /* const dispatch = useDispatch();
  const { userProfile, auth } = useSelector((state) => state);
  const accessToken = auth.accessToken;
  const [userName, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  //affichage du formulaire
  const handleEditName = () => {
    setIsFormVisible(true);
    setUsername(userProfile?.userName || "");
  };

  //changelement du userName, nouvelle valeur
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  //sauvegarde et envoie de la nouvelle valeur
  const handleSave = async () => {
    try {
      await dispatch(updateUsername(accessToken, userName));
      setMessage("Informations enregistrées avec succès !");
      setIsFormVisible(false);
    } catch (error) {
      setMessage("Une erreur est survenue lors de l'enregistrement.");
    }
  };

  //annulation des données
  const handleCancel = () => {
    setUsername(userProfile.userName);
    setMessage("Modifications annulées.");
    setIsFormVisible(false);
  };
  console.log(userProfile);*/
  //rendu du composant
  return (
    <div></div>
    /*
    <form
      className={`form-group edit-user-info ${
        isFormVisible ? "form-visible" : ""
      }`}
    >

      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={userProfile?.firstName || ""}
          disabled={status === "loading"}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={userProfile?.lastName || ""}
          disabled={status === "loading"}
        />
      </div>
      <div>
        <label htmlFor="userName">UserName:</label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={userName}
          onChange={handleUsernameChange}
          disabled={status === "loading"}
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
    </form>*/
  );
};

export default EditUserInfo;
