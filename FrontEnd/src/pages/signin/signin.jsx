//Le composant Signin importe trois composants enfants : MainNav, SignInForm, et Footer.
import React from "react";
import MainNav from "../../components/nav/nav";
import SignInForm from "../../components/signinfom/signinform";
import Footer from "../../components/footer/footer";
import "./signin.css";

function Signin() {
  return (
    <div>
      <MainNav />
      <main className="main bg-dark">
        <SignInForm />
      </main>
      <Footer />
    </div>
  );
}

export default Signin;
/**Le composant Signin est responsable de la gestion de l'état du formulaire,
 * de la validation des entrées, et de l'envoi des informations d'authentification au serveur. */
