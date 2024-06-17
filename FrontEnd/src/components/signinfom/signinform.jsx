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

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await dispatch(login({ email, password }));
      const accessToken = localStorage.getItem("accessToken");
      await dispatch(fetchUserProfile(accessToken));
      navigate("/user");
    } catch (err) {
      navigate("/error");
    }
  };
  /*const handleSubmit = (e) => {
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
