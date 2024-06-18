import React from "react";
//importe la fonction useNavigate du paquet react-router-dom, qui permet de naviguer vers une nouvelle route dans l'application.
import { useNavigate } from "react-router-dom";

// Il s'agit d'un composant fonctionnel sans props en entrée.
function MainNav() {
  //crée une constante navigate qui est une référence à la fonction de navigation fournie par useNavigate().
  const navigate = useNavigate();
  /*fonction est appelée lorsque l'utilisateur clique sur le lien "Sign In". 
  Elle utilise la fonction navigate pour rediriger l'utilisateur vers la route /signin.*/
  const handleSignIn = () => {
    navigate("/signin");
  };
  //section contient le code JSX qui définit le rendu du composant.
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
        <a className="main-nav-item" href="#" onClick={handleSignIn}>
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
  );
}

export default MainNav;
/**représente la barre de navigation principale de l'application.
 * Il affiche le logo de la banque Argent Bank et un lien "Sign In" qui redirige
 * l'utilisateur vers la page de connexion lorsqu'il est cliqué. */
