import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditUserInfo from "../../components/EditUserInfo/EditUserInfo";
import { fetchUserProfile } from "../../actions/authActions";

function Header() {
  const dispatch = useDispatch();
  const { accessToken, username, status } = useSelector((state) => state.auth);
  const [showEditUserInfo, setShowEditUserInfo] = useState(false);

  const handleEditNameClick = () => {
    setShowEditUserInfo(true);
  };

  // Récupérer le profil de l'utilisateur au montage du composant
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUserProfile({ accessToken }));
    }
  }, [dispatch, status, accessToken]);

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

export default Header;

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
