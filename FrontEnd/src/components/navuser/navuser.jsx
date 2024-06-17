//commosant navuser
import React from "react";
import logoConnected from "../../assets/image/logoconnecte.png";
import "../navuser/navuser.css";
import { useSelector } from "react-redux";

function MainNavUser() {
  const { userName } = useSelector((state) => state.auth);

  return (
    <nav className="main-nav-connected">
      <div className="main-nav-left">
        <a className="main-nav-logo-position" href="/">
          <img
            className="main-nav-logo-connected"
            src={logoConnected}
            alt="Argent Bank Logo"
            width={25}
            height={25}
          />
        </a>
        <h1 className="main-nav-title">Argent Bank</h1>
      </div>
      <div className="main-nav-right">
        <a className="main-nav-item-connected" href="/user">
          <i className="fa fa-user-circle"></i>
          {userName}
        </a>
        <a className="main-nav-item-connected" href="/settings">
          <i className="fas fa-cog"></i>
        </a>
        <a className="main-nav-item-connected" href="/">
          <i className="fas fa-power-off"></i>
        </a>
      </div>
    </nav>
  );
}

export default MainNavUser;
