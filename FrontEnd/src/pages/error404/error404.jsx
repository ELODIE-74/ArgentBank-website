import { Link } from "react-router-dom";
import "../../pages/error404/error404.css";

//fonction qui affiche la page d'erreur et sa redirection sur la page d'accueil(home) en cas de problème
function Error404() {
  return (
    <section className="ConteneurError404">
      <h1 className="TitleError404">404</h1>
      {/**indique à l'utilisateur que la page demandé n'est pas disponible */}
      <p className="TexteError404">
        Il semblerait que la page que vous demandez n'existe pas.
      </p>
      {/**permet a l'utilisateur de revenir sur la page d'accueil lorsque que la page demandé n'est pas trouvé*/}
      <Link to="/" className="LinkError404">
        Retourner sur la page d'accueil d'ArgentBank
      </Link>
    </section>
  );
}
export default Error404;
