import React from "react";
//import EditUserInfo from "../../components/EditUserInfo/EditUserInfo";

function Header() {
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        Tony Jarvis
      </h1>
      <button className="edit-button">Edit name</button>
    </div>
  );
}

export default Header;
