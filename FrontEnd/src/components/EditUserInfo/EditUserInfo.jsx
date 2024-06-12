import React, { useState } from "react";
import "../EditUserInfo/EditUserinfo.css";

const EditUserInfo = () => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSave = () => {
    // Logique de sauvegarde des données
  };

  const handleCancel = () => {
    // Réinitialiser les données du formulaire si nécessaire
  };

  return (
    <div>
      <div className="edit-user-info">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
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
      </div>
    </div>
  );
};

export default EditUserInfo;
/**import React, { useState, useEffect } from "react";
import "../EditUserInfo/EditUserinfo.css";

const EditUserInfo = ({ userData, onSave, onCancel }) => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  useEffect(() => {
    // Pré-remplir les champs avec les données de l'utilisateur
    setUserName(userData.userName);
    setFirstName(userData.firstName);
    setLastName(userData.lastName);
  }, [userData]);

  const handleUsernameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSave = () => {
    // Logique de sauvegarde des données
    onSave({
      userName,
      firstName,
      lastName,
    });
    setShowConfirmationModal(true);
  };

  const handleCancel = () => {
    // Réinitialiser le champ du username
    setUserName(userData.userName);
    onCancel();
    setShowConfirmationModal(true);
  };

  return (
    <div>
      <div className="edit-user-info">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" value={firstName} disabled />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" value={lastName} disabled />
        </div>
        <div className="buttons">
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
          <button className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>

      {showConfirmationModal && (
        <div className="confirmation-modal">
          <div className="modal-content">
            {userName !== userData.userName ? (
              <p>Les modifications ont été enregistrées avec succès.</p>
            ) : (
              <p>L'annulation a été effectuée avec succès.</p>
            )}
            <button onClick={() => setShowConfirmationModal(false)}>Ok</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditUserInfo; */
