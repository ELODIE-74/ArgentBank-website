// Hero.jsx
import React from "react";

//Il s'agit d'un composant fonctionnel sans props en entrée.
//section contient le code JSX qui définit le rendu du composant.
function Hero() {
  return (
    <div className="hero">
      <section className="hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="subtitle">No fees.</p>
        <p className="subtitle">No minimum deposit.</p>
        <p className="subtitle">High interest rates.</p>
        <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  );
}

export default Hero;
/**Ce composant Hero représente la section de contenu promotionnel de l'application.
 * Il affiche plusieurs éléments textuels mettant en avant les avantages d'ouvrir
 *  un compte d'épargne avec Argent Bank, tels que l'absence de frais, de dépôt minimum
 * et des taux d'intérêt élevés. */
