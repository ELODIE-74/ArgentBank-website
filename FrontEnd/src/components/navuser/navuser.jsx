import React from "react";
import logoConnected from "../../assets/image/logoconnecte.png";
import "../headeruser/headeruser.css";

function MainNavUser() {
  return (
    <nav className="main-nav-connected">
      <div className="main-nav-left">
        <a className="main-nav-logo" href="/">
          <img
            className="main-nav-logo-image"
            src={logoConnected}
            alt="Argent Bank Logo"
          />
        </a>
        <h1 className="main-nav-title">Argent Bank</h1>
      </div>
      <div className="main-nav-right">
        <a className="main-nav-item" href="/user">
          <i className="fa fa-user-circle"></i>
          Ben Hong
        </a>
        <a className="main-nav-item" href="/settings">
          <i className="fas fa-cog"></i>
        </a>
        <a className="main-nav-item" href="/">
          <i className="fas fa-power-off"></i>
        </a>
      </div>
    </nav>
  );
}

export default MainNavUser;

/*import React from "react";

function MainNavUser() {
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img
          className="main-nav-logo-image"
          src="/image/argentBankLogo.webp"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a className="main-nav-item" href="/user">
          <i className="fa fa-user-circle"></i>
          Tony
        </a>
        <a className="main-nav-item" href="/">
          <i className="fas fa-power-off"></i>
        </a>
      </div>
    </nav>
  );
}
export default MainNavUser;*/
