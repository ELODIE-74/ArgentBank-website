import React, { useState } from "react";
import EditUserInfo from "../../components/EditUserInfo/EditUserInfo";

function Header() {
  const [showEditForm, setShowEditForm] = useState(false);
  const [userInfo, setUserInfo] = useState({
    firstName: "Tony",
    lastName: "Jarvis",
    username: "tonyjarvis",
  });

  const handleEditButtonClick = () => {
    setShowEditForm(!showEditForm); // change sa valeur d'affichage
  };

  const handleEditComplete = (updatedUserInfo) => {
    setUserInfo(updatedUserInfo);
    setShowEditForm(false);
    // Ici,on envoie les nouvelles informations au serveur
  };
  // écouteur d'événement au clic sur le bouton qui permet d'afficher le formulaire de modifications d'informations
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {userInfo.firstName} {userInfo.lastName}
      </h1>
      <button className="edit-button" onClick={handleEditButtonClick}>
        Edit Name
      </button>
      {showEditForm && (
        <EditUserInfo
          isLoggedIn={true}
          username={userInfo.username}
          originalUserInfo={{
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            username: userInfo.username,
            //récupére le nom, prénom et le speudo de l'utlisateur, les nouvelles valeurs
          }}
          onEditComplete={handleEditComplete}
        />
      )}
    </div>
  );
}

export default Header;
