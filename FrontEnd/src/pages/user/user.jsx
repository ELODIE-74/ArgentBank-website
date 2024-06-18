//UserPage importe plusieurs composants enfants : MainNavUser, Account, Header, et Footer.
import React from "react";
import MainNavUser from "../../components/navuser/navuser";
import Account from "../../components/account/account";
import Header from "../../components/headeruser/headeruser";
import Footer from "../../components/footer/footer";
import "../../pages/user/user.css";

function UserPage() {
  return (
    <div>
      <MainNavUser />
      <main className="main bg-dark">
        <Header />
        <h2 className="sr-only">Accounts</h2>
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </main>
      <Footer />
    </div>
  );
}

export default UserPage;
/**MainNavUser = il s'agit d'une barre de navigation spécifique à l'utilisateur, différente de la barre de navigation principale (MainNav) mode connecté.
 * Header = il affiche des informations spécifiques à l'utilisateur, comme son nom, son profil.
 * Account = affiche le titre du compte, le montant disponible, et une description.
 * Footer = pied de la page
 */
