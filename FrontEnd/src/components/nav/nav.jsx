import React from "react";

function MainNav() {
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./index.html">
        <img
          className="main-nav-logo-image"
          src="./image/argentBankLogo.webp"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <diV>
        <a className="main-nav-item" href="./sign-in.html">
          <i className="fa fa-user-circle"></i>Sign in
        </a>
      </diV>
    </nav>
  );
}