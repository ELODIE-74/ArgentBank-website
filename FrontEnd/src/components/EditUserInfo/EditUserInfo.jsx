import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUsername } from "../../actions/authActions";
import "../EditUserInfo/EditUserinfo.css";

const EditUserInfo = () => {
  const dispatch = useDispatch();
  const { userProfile, status, accessToken } = useSelector(
    (state) => state.auth
  );
  const [userName, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  // mise a jour si le token change
  useEffect(() => {
    if (accessToken) {
      dispatch(updateUsername(accessToken));
    }
  }, [dispatch, accessToken]);

  //mise a jour de la valeur de userName
  useEffect(() => {
    if (userProfile) {
      setUsername(userProfile.userName);
    }
  }, [userProfile]);

  //affichage du formulaire
  const handleEditName = () => {
    setIsFormVisible(true);
    setUsername(userProfile?.userName || "");
  };

  //changelement du userName, nouvelle valeur
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  //sauvegarde et envoie de la nouvelle valeur
  const handleSave = async () => {
    try {
      await dispatch(updateUsername(accessToken, userName));
      setMessage("Informations enregistrées avec succès !");
      setIsFormVisible(false);
    } catch (error) {
      setMessage("Une erreur est survenue lors de l'enregistrement.");
    }
  };

  //annulation des données
  const handleCancel = () => {
    setUsername(userProfile.userName);
    setMessage("Modifications annulées.");
    setIsFormVisible(false);
  };

  //rendu du composant
  return (
    <form
      className={`form-group edit-user-info ${
        isFormVisible ? "form-visible" : ""
      }`}
    >
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={userProfile?.firstName || ""}
          disabled={status === "loading"}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={userProfile?.lastName || ""}
          disabled={status === "loading"}
        />
      </div>
      <div>
        <label htmlFor="userName">UserName:</label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={userName}
          onChange={handleUsernameChange}
          disabled={status === "loading"}
        />
      </div>
      <div className="buttons">
        <button className="save-btn" onClick={handleSave}>
          Save
        </button>
        <button className="cancel-btn" onClick={handleCancel}>
          Cancel
        </button>
      </div>
      {message && <div>{message}</div>}
    </form>
  );
};

export default EditUserInfo;
/*useEffect(() => {
    if (accessToken) {
      dispatch(updateUsername(accessToken, userProfile));
    }
  }, [dispatch, accessToken, userProfile]);

  useEffect(() => {
    if (userProfile) {
      setUsername(userProfile.userName);
    }
  }, [userProfile]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSave = async () => {
    try {
      await dispatch(updateUsername(userName, accessToken));
      setMessage("Informations enregistrées avec succès !");
      setIsFormVisible(false);
    } catch (error) {
      setMessage("Une erreur est survenue lors de l'enregistrement.");
    }
  };

  const handleCancel = () => {
    setUsername(userProfile?.userName || "");
    setMessage("Modifications annulées.");
    setIsFormVisible(false);
  };*/

/*import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; //interagir avec le store Redux.
import { fetchUserProfile, updateUsername } from "../../actions/authActions"; //importe deux actions Redux liées à l'authentification : fetchUserProfile et updateUsername.
import "../EditUserInfo/EditUserinfo.css";

const EditUserInfo = () => {
  const dispatch = useDispatch(); //Cette ligne crée une instance de la fonction dispatch de Redux, qui sera utilisée pour déclencher des actions.
  const { userProfile, status } = useSelector((state) => state.auth); // extrait les propriétés userProfile et status du state Redux, dans le sous-état auth.
  const [userName, setUsername] = useState(""); // crée un état local userName et une fonction setUsername pour le mettre à jour. Il est initialisé à une chaîne vide.
  const [message, setMessage] = useState(""); //crée un état local message et une fonction setMessage pour le mettre à jour. Il est initialisé à une chaîne vide.
  const [isFormVisible, setIsFormVisible] = useState(false); //crée un état local isFormVisible et une fonction setIsFormVisible pour le mettre à jour. Il est initialisé à false.

  //démarre un effet de bord qui sera exécuté une seule fois, lors du montage du composant.
  useEffect(() => {
    dispatch(fetchUserProfile()); //déclenche l'action Redux fetchUserProfile pour récupérer le profil utilisateur.
  }, [dispatch]); // indique que l'effet de bord ne doit être exécuté qu'une seule fois, car le tableau de dépendances est vide.

  useEffect(() => {
    if (userProfile) {
      //démarre un autre effet de bord qui sera exécuté chaque fois que la propriété userProfile change.
      //condition vérifie si la propriété userProfile n'est pas null ou undefined.
      setUsername(userProfile.userName); //met à jour l'état local userName avec la valeur de userProfile.userName.
    }
  }, [userProfile]); //ndique que l'effet de bord doit être exécuté chaque fois que la propriété userProfile change.

  // fonction est appelée lorsque la valeur du champ "User Name" change.
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  //fonction est appelée lorsque l'utilisateur clique sur le bouton "Save".
  const handleSave = async () => {
    try {
      await dispatch(updateUsername(userProfile.userName)); //déclenche l'action Redux updateUsername avec la nouvelle valeur de userName.

      setMessage("Informations enregistrées avec succès !"); //met à jour l'état local message avec un message de succès.
      setIsFormVisible(false); //met à jour l'état local isFormVisible à false pour cacher le formulaire.
    } catch (error) {
      //met à jour l'état local message avec un message d'erreur.
      setMessage("Une erreur est survenue lors de l'enregistrement.");
    }
  };

  //fonction est appelée lorsque l'utilisateur clique sur le bouton "Cancel".
  const handleCancel = () => {
    setUsername(userProfile?.userName || ""); // met à jour l'état local userName avec la valeur de userProfile.userName ou une chaîne vide si userProfile est null ou undefined.
    setMessage("Modifications annulées."); //met à jour l'état local message avec un message d'annulation.
    setIsFormVisible(false); // met à jour l'état local isFormVisible à false pour cacher le formulaire.
  };
*/
