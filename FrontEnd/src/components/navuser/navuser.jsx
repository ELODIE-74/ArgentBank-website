//commosant navuser
import React from "react";
import logoConnected from "../../assets/image/logoconnecte.png";
import "../navuser/navuser.css";
//importe la fonction useSelector du paquet react-redux, qui permet d'accéder aux données du store Redux.
import { useSelector } from "react-redux";

//Il s'agit d'un composant fonctionnel sans props en entrée.
function MainNavUser() {
  //utilise useSelector pour récupérer la valeur de userName depuis le store Redux, dans le sous-état auth.
  const { userName } = useSelector((state) => state.auth);
  //section contient le code JSX qui définit le rendu du composant.
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
/**Ce composant MainNavUser représente la barre de navigation principale de l'application pour un utilisateur connecté.
 * Il affiche le logo de la banque Argent Bank, le nom d'utilisateur, ainsi que des liens vers la page de l'utilisateur,
 * les paramètres et la déconnexion. */
