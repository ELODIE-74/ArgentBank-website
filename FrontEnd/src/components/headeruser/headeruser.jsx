import React, { useState } from "react";
import EditUserInfo from "../../components/EditUserInfo/EditUserInfo";

function Header() {
  const [showEditForm, setShowEditForm] = useState(false);
  const userInfo = {
    firstName: "Tony",
    lastName: "Jarvis",
  };

  const handleEditButtonClick = () => {
    setShowEditForm(true);
  };

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
      {showEditForm && <EditUserInfo userInfo={userInfo} />}
    </div>
  );
}

export default Header;
