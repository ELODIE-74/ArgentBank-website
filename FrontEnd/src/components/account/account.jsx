// Account.jsx
import React from "react";

function Account({ title, amount, description }) {
  /*C'est la définition du composant Account. Il s'agit d'un composant fonctionnel qui prend 
  trois props en entrée : title, amount et description.*/
  return (
    //section contient le code JSX qui définit le rendu du composant.
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
}

export default Account;
