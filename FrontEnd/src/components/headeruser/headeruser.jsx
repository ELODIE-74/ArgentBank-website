//composant headeruser
import React, { useState } from "react";
import EditUserInfo from "../../components/EditUserInfo/EditUserInfo";
import { useSelector } from "react-redux";
function Header() {
  const [showEditUserInfo, setShowEditUserInfo] = useState(false);
  const userName = useSelector((state) => state.auth.userName);

  const handleEditNameClick = () => {
    setShowEditUserInfo(true);
  };

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {userName}
      </h1>
      <button className="edit-button" onClick={handleEditNameClick}>
        Edit name
      </button>
      {showEditUserInfo && <EditUserInfo />}
    </div>
  );
}
export default Header;
/*En utilisant useSelector, vous pouvez accéder au champ username de l'état auth dans votre Redux store. 
Cela vous permet d'afficher le nom d'utilisateur dans votre composant Header une fois qu'il est récupéré depuis le store.
Avec ces ajustements, votre composant Header devrait maintenant afficher le nom de l'utilisateur une fois qu'il est connecté 
et que cette information est disponible dans votre Redux store.*/

/*function Header() {
  const [showEditUserInfo, setShowEditUserInfo] = useState(false);
  const [fetchUserProfile] = useState(""); // Ajoutez cette ligne pour initialiser la variable username

  const handleEditNameClick = () => {
    setShowEditUserInfo(true);
  };

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {fetchUserProfile} 
      </h1>
      <button className="edit-button" onClick={handleEditNameClick}>
        Edit name
      </button>
      {showEditUserInfo && <EditUserInfo />}
    </div>
  );
}

export default Header;*/

/*import React, { useState } from "react";

import EditUserInfo from "../../components/EditUserInfo/EditUserInfo";

function Header() {
  const [showEditUserInfo, setShowEditUserInfo] = useState(false);

  const handleEditNameClick = () => {
    setShowEditUserInfo(true);
  };

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {username}
      </h1>
      <button className="edit-button" onClick={handleEditNameClick}>
        Edit name
      </button>
      {showEditUserInfo && <EditUserInfo />}
    </div>
  );
}

export default Header;*/

/*import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditUserInfo from "../../components/EditUserInfo/EditUserInfo";
import { fetchUserProfile } from "../../actions/authActions";

function Header() {
  const dispatch = useDispatch();
  const { username, status } = useSelector((state) => state.auth);
  const [showEditUserInfo, setShowEditUserInfo] = useState(false);

  const handleEditNameClick = () => {
    setShowEditUserInfo(true);
  };

  // Récupérer le profil de l'utilisateur au montage du composant
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUserProfile(username));
    }
  }, [dispatch, status]);

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {username}
      </h1>
      <button className="edit-button" onClick={handleEditNameClick}>
        Edit name
      </button>
      {showEditUserInfo && <EditUserInfo />}
    </div>
  );
}

export default Header;*/
