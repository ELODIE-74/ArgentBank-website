import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUserProfile, login } from "../../actions/authActions";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  ////utilise useSelector pour récupérer l'état global de l'authentification (loading et error) depuis le store Redux.
  const { loading } = useSelector((state) => state.auth);
  //utilise useDispatch pour pouvoir dispatcher les actions Redux login et fetchUserProfile.
  const dispatch = useDispatch();
  //utilise useNavigate pour pouvoir rediriger l'utilisateur vers différentes pages en fonction du résultat de l'authentification.
  const navigate = useNavigate();

  /** fonction handleSubmit est asynchrone et utilise l'opérateur await pour attendre que les actions Redux
   * login et fetchUserProfile soient terminées avant de rediriger l'utilisateur. En cas d'erreur dans les
   * champs du formulaire qu'il soit vide ou incorrecte, redirection vers la page error404 */
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      // Vérifie que les champs du formulaire sont remplis
      if (!email || !password) {
        setError(
          "Veuillez remplir tous les champs du formulaire, s'il vous plait."
        );
        navigate("/error404");
        return;
      }

      // Vérifie que les valeurs sont valides (par exemple, que l'email a un format correct)
      if (!isValidEmail(email) || !isValidPassword(password)) {
        setError("Veuillez entrer des valeurs correctes, s'il vous plait.");
        navigate("/error404");
        return;
      }

      await dispatch(login({ email, password }));
      const accessToken = localStorage.getItem("accessToken"); //récupère le token(jeton d'authentification)
      await dispatch(fetchUserProfile(accessToken)); // appel fonction fetchprofile qui est dans action pour son appel api
      navigate("/user"); //si ok, redirection vers la page user(profil) de l'utlisateur
    } catch (err) {
      navigate("/error404"); //sinon redirection vers la page d'erreur
    }
  };

  const isValidEmail = (email) => {
    // Ajoute une validation d'email ici
    return email.includes("@");
  };

  const isValidPassword = (password) => {
    // Ajoute une validation de mot de passe ici (longueur)
    return password.length >= 8;
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button type="submit" className="sign-in-button" disabled={loading}>
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>
    </section>
  );
};

export default SignInForm;
