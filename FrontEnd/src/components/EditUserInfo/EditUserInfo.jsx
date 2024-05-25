import React, { useState } from "react";

function EditUserInfo({
  isLoggedIn,
  username,
  originalUserInfo,
  onEditComplete,
}) {
  const [firstName, setFirstName] = useState(originalUserInfo?.firstName || "");
  const [lastName, setLastName] = useState(originalUserInfo?.lastName || "");
  const [newUsername, setNewUsername] = useState(username);
  const [showForm, setShowForm] = useState(false);

  const handleSave = () => {
    // Logique de sauvegarde des modifications
    console.log("Informations utilisateur mises à jour avec succès !");
    onEditComplete({ firstName, lastName, username: newUsername });
    setShowForm(false);
  };

  const handleCancel = () => {
    // Logique d'annulation des modifications
    setFirstName(originalUserInfo?.firstName || "");
    setLastName(originalUserInfo?.lastName || "");
    setNewUsername(username);
    setShowForm(false);
  };

  /*retourne un formualire à remplir qui apparait au clic sur le bouton edit name et ces infos seront enregistrés et 
  envoye au serveur sinon possibilité d'annuler cette modification, et de remettre les champs de saisie a zéro*/
  return (
    <div>
      {isLoggedIn && (
        <div className="edit-user-info">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
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

export default EditUserInfo;
