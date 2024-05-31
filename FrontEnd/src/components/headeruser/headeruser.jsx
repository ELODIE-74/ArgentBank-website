import React, { useState } from "react";
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
        Tony Jarvis
      </h1>
      <button className="edit-button" onClick={handleEditNameClick}>
        Edit name
      </button>
      {showEditUserInfo && <EditUserInfo />}
    </div>
  );
}

export default Header;
