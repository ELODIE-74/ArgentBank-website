/** import des hooks useState et useEffect de React, ainsi que le composant EditUserInfo. */
import React, { useState, useEffect } from "react";
import EditUserInfo from "../../components/EditUserInfo/EditUserInfo";
//import des hooks useSelector et useDispatch de Redux, qui permettent d'accéder à l'état global de l'application et de déclencher des actions.
import { useSelector, useDispatch } from "react-redux";
//importe l'action fetchUserProfile depuis le fichier authActions.js.
import { fetchUserProfile, updateUsername } from "../../actions/authActions";

function Header() {
  //code initialise un état local avec le hook useState. showEditUserInfo est utilisé pour contrôler l'affichage du composant EditUserInfo.
  const [showEditUserInfo, setShowEditUserInfo] = useState(false);
  //code utilise le hook useSelector pour extraire les propriétés userProfile et accessToken de l'état global de l'application (stocké dans le store Redux).
  const { userProfile, accessToken } = useSelector((state) => state.auth);
  //code utilise le hook useDispatch pour obtenir une référence à la fonction dispatch de Redux, qui permet de déclencher des actions.
  const dispatch = useDispatch();

  /*fonction est appelée lorsque l'utilisateur clique sur le bouton "Edit name". 
  Elle définit la valeur de showEditUserInfo à true pour afficher le composant EditUserInfo.*/
  const handleEditNameClick = () => {
    setShowEditUserInfo(true);
  };

  /**hook useEffect est appelé lorsque le composant est monté ou que les dépendances dispatch ou accessToken changent.
   * Il déclenche l'action fetchUserProfile avec le accessToken pour récupérer le profil de l'utilisateur. */
  useEffect(() => {
    if (accessToken) {
      dispatch(fetchUserProfile(accessToken));
    }
  }, [dispatch, accessToken]);
  console.log(userProfile); // Ajout de cette ligne pour afficher le contenu de userProfile
  //section contient le code JSX qui définit le rendu du composant.
  /**{userProfile ? = Si userProfile existe, le composant affiche un message de bienvenue avec le nom de l'utilisateur,
   * un bouton "Edit name" et le composant EditUserInfo si showEditUserInfo est vrai.
   * Si userProfile est null, le composant affiche un message "Loading...".*/
  return (
    <div className="header">
      {userProfile ? (
        <>
          <h1>
            Welcome back
            <br />
            {userProfile.userName}
          </h1>
          <button className="edit-button" onClick={handleEditNameClick}>
            Edit name
          </button>
          {showEditUserInfo && <EditUserInfo />}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default Header;
