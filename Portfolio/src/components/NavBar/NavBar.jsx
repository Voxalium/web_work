import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="NavBar absolute">
      <ul className="row gap15 pdl1">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projets</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
