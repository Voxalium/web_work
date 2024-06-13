import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="NotFound col fullcenter">
      <div className="container col fullheight fullcenter">
        <h1>Page non trouvée !</h1>
        <NavLink className="mt1" to="/">
          Aller à la page d'accueil
        </NavLink>
      </div>
    </main>
  );
}
