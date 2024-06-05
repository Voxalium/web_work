import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="NavBar">
      <div className="row gap15 pdl1">
        <NavLink className="NavLink" to="/">
          <p>Home</p>
        </NavLink>
        <NavLink className="NavLink" to="/projects">
          <p>Projets</p>
        </NavLink>
        <NavLink className="NavLink" to="/contact">
          <p>Contact</p>
        </NavLink>
      </div>
    </nav>
  );
}
