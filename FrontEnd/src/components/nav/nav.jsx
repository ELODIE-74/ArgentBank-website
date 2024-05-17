// MainNav.jsx
import React from "react";

function MainNav() {
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/signup">
        <img
          className="main-nav-logo-image"
          src="/image/argentBankLogo.webp"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a className="main-nav-item" href="./signup">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
  );
}

export default MainNav;
