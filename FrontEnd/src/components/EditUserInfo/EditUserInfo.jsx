import React, { useState } from "react";

function EditUserInfo({ isLoggedIn, username, originalUserInfo }) {
  const [firstName, setFirstName] = useState(originalUserInfo?.firstName || "");
  const [lastName, setLastName] = useState(originalUserInfo?.lastName || "");

  const handleSave = () => {
    // Logique de sauvegarde des modifications
    console.log("Informations utilisateur mises à jour avec succès !");
  };

  const handleCancel = () => {
    // Logique d'annulation
    setFirstName(originalUserInfo?.firstName || "");
    setLastName(originalUserInfo?.lastName || "");
  };

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} />
      {isLoggedIn && (
        <div className="edit-user-info">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={username} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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
      )}
    </div>
  );
}

const Header = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn && <h1>Header quand vous êtes connecté</h1>}
      {!isLoggedIn && <h1>Header quand vous êtes déconnecté</h1>}
    </div>
  );
};

export default EditUserInfo;
