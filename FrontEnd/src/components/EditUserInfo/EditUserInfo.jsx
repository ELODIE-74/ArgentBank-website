import React, { useState } from "react";
import "../EditUserInfo/EditUserinfo.css";
import { updateUsername } from "../../actions/authActions"; // Importez la fonction d'action pour mettre à jour le nom d'utilisateur

const EditUserInfo = () => {
  const [userName, setUsername] = useState(""); // Utilisation du hook useState pour créer des états locaux pour le nom d'utilisateur
  const [firstName, setFirstName] = useState(""); // Prénom est en lecture seule
  const [lastName, setLastName] = useState(""); // Nom est en lecture seule
  const [message, setMessage] = useState(""); // État local pour stocker le message de confirmation

  // Définition de la fonction de rappel qui gère les changements de valeur du champ du nom d'utilisateur
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // Définition de la fonction de rappel qui gère l'enregistrement des données du formulaire
  const handleSave = async () => {
    try {
      // Appel API pour mettre à jour le nom d'utilisateur
      await updateUsername(userName);
      setMessage("Informations enregistrées avec succès !");
    } catch (error) {
      setMessage("Une erreur est survenue lors de l'enregistrement.");
    }
  };

  // Définition de la fonction de rappel qui gère l'annulation des modifications du formulaire
  const handleCancel = () => {
    setUsername("");
    setMessage("Modifications annulées.");
  };

  return (
    <div>
      <div className="edit-user-info">
        <div className="form-group">
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            id="userName"
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
      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default EditUserInfo;
/*import React, { useState } from "react";
import "../EditUserInfo/EditUserinfo.css";
import { updateUsername } from "../../actions/authActions"; // Importez la fonction d'action pour mettre à jour le nom d'utilisateur

const EditUserInfo = () => {
  const [username, setUsername] = useState(""); // Utilisation du hook useState pour créer des états locaux pour le nom d'utilisateur
  const [firstName, setFirstName] = useState(""); // Prénom est en lecture seule
  const [lastName, setLastName] = useState(""); // Nom est en lecture seule
  const [message, setMessage] = useState(""); // État local pour stocker le message de confirmation

  // Définition de la fonction de rappel qui gère les changements de valeur du champ du nom d'utilisateur
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // Définition de la fonction de rappel qui gère l'enregistrement des données du formulaire
  const handleSave = async () => {
    try {
      // Appel API pour mettre à jour le nom d'utilisateur
      await updateUsername(username);
      setMessage("Informations enregistrées avec succès !");
    } catch (error) {
      setMessage("Une erreur est survenue lors de l'enregistrement.");
    }
  };

  // Définition de la fonction de rappel qui gère l'annulation des modifications du formulaire
  const handleCancel = () => {
    setUsername("");
    setMessage("Modifications annulées.");
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
      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default EditUserInfo;*/
/*import React, { useState } from "react";
import "../EditUserInfo/EditUserinfo.css";

const EditUserInfo = () => {
  const [username, setUsername] = useState(""); //Utilisation du hook useState pour créer des états locaux pour le nom d'utilisateur, le prénom et le nom.
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  //Définition de la fonction de rappel qui gère les changements de valeur du champ du nom d'utilisateur.
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  //Définition de la fonction de rappel qui gère les changements de valeur du champ prénom.
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  //Définition de la fonction de rappel qui gère les changements de valeur du champ nom.
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  //Définition de la fonction de rappel qui gère l'enregistrement des données du formulaire.
  const handleSave = () => {
    // Logique de sauvegarde des données
  };
  //Définition de la fonction de rappel qui gère l'annulation des modifications du formulaire.
  const handleCancel = () => {
    // Réinitialiser les données du formulaire si nécessaire
  };
  //section contient le code JSX qui définit le rendu du composant.
  /*Crée un champ de saisie de texte pour le nom d'utilisateur avec la valeur liée à l'état local username et 
  la fonction de rappel handleUsernameChange pour gérer les changements de valeur.*/
/*return (
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

export default EditUserInfo;*/
