//formulaire d'authentification
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUserProfile, login } from "../../actions/authActions";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      dispatch(login({ email, password }));
      dispatch(fetchUserProfile());
      // Rediriger vers la page de l'utilisateur
      navigate("/user");
    } catch (error) {
      console.error(error.message);
      navigate("/error404"); // Gérer les erreurs de connexion
    }
  };
  /**const userData = {
email,
password,
firstName,
lastName,
username
}; */

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

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
/*import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUserProfile, login } from "../../actions/authActions";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }))
      .then((data) => {
        const accessToken = data.body.token;
        return dispatch(fetchUserProfile(accessToken));
      })
      .then((userProfile) => {
        localStorage.setItem("user", JSON.stringify(userProfile));
        localStorage.setItem("accessToken", accessToken);
        navigate("/user"); // Redirigez l'utilisateur vers la page d'accueil après une connexion réussie
      })
      .catch((error) => {
        navigate("/error404"); // Gérer les erreurs de connexion
      });
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
}

export default SignInForm;*/
/*import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUserProfile, login } from "../../actions/authActions";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }))
      .then((data) => {
        const accessToken = data.body.token;
        return dispatch(fetchUserProfile(accessToken));
      })
      .then((userProfile) => {
        // Utilisez directement le userProfile retourné par l'action fetchUserProfile
        localStorage.setItem("user", JSON.stringify(userProfile));
        localStorage.setItem("accessToken", accessToken);
        navigate("/user"); // Redirigez l'utilisateur vers la page d'accueil après une connexion réussie
      })
      .catch((error) => {
        navigate("/error404"); // Gérer les erreurs de connexion
      });
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
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
}

export default SignInForm;*/
