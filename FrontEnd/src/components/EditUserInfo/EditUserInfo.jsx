import React, { useState } from "react";
import "../EditUserInfo/EditUserinfo.css";

function EditUserInfo({ isLoggedIn, onEditComplete }) {
  //états initial à l'affichage du formulaire de modifications
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [showForm, setShowForm] = useState(false);
  //message de confirmation pour l'annulation ou la sauvegarde des données
  const [showSaveConfirmation, setShowSaveConfirmation] = useState(false);
  const [showCancelConfirmation, setShowCancelConfirmation] = useState(false);

  const handleSave = () => {
    // Logique de sauvegarde des modifications
    console.log("Informations utilisateur mises à jour avec succès !");
    onEditComplete({ firstName, lastName, username: newUsername });
    setShowSaveConfirmation(true);
    setTimeout(() => {
      // afficher un message de confirmation d'envoi réussi
      setShowSaveConfirmation(false);
      // remet les champs a zéro une fois la sauved=garde des données enregistrées avec succès
      resetFields();
    }, 2000);
  };

  const handleCancel = () => {
    // Logique d'annulation des modifications
    setShowCancelConfirmation(true);
    setTimeout(() => {
      // afficher le message de confirmation d'annulation de données
      setShowCancelConfirmation(false);
      //appel la méthode pour remmettre les champs de valeurs à zéro
      resetFields();
    }, 2000);
  };
  //remet les champs du formulaire à zéro, vide
  const resetFields = () => {
    setFirstName("");
    setLastName("");
    setNewUsername("");
    setShowForm(false);
  };
  // retourne le username, le firstname et le lastname que l'on peut modifier
  // bouton "save" pour la sauvegarde des données avec message de confirmation en cas de réussite
  // bouton "cancel" pour l'annulation des champs remplis du formulaire
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
          {showSaveConfirmation && (
            <div className="confirmation-message">
              Enregistrement de vos données avec succès !
            </div>
          )}
          {showCancelConfirmation && (
            <div className="confirmation-message">
              Annulation réussi des modifications effectuée
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default EditUserInfo;
