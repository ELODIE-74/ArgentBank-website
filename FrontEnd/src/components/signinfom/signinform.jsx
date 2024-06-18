//formulaire d'authentification
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUserProfile, login } from "../../actions/authActions";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  ////utilise useSelector pour récupérer l'état global de l'authentification (loading et error) depuis le store Redux.
  const { loading, error } = useSelector((state) => state.auth);

  //utilise useDispatch pour pouvoir dispatcher les actions Redux login et fetchUserProfile.
  const dispatch = useDispatch();
  //utilise useNavigate pour pouvoir rediriger l'utilisateur vers différentes pages en fonction du résultat de l'authentification.
  const navigate = useNavigate();

  /** fonction handleSubmit est asynchrone et utilise l'opérateur await pour attendre que les actions Redux
   * login et fetchUserProfile soient terminées avant de rediriger l'utilisateur. */
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await dispatch(login({ email, password }));
      const accessToken = localStorage.getItem("accessToken");
      await dispatch(fetchUserProfile(accessToken));
      navigate("/user");
    } catch (err) {
      //En cas d'erreur, l'utilisateur est redirigé vers la page "/error".
      navigate("/error");
    }
  };

  //Affichage du formulaire
  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="userName">Email</label>
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
/*Cette version utilise des promesses au lieu d'être asynchrone.
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }))
      .then((data) => {
        // Récupération du token depuis le payload lors de l'authentification
        const accessToken = data.body.token;
        dispatch(fetchUserProfile(accessToken)).then(() => {
          return navigate("/user");
        });
      })

      .catch((error) => {
        navigate("/error404"); // Gérer les erreurs de connexion
      });
  };*/
