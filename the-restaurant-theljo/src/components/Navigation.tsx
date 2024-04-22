import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <input
        className="menu-btn"
        type="checkbox"
        id="menu-btn"
        name="menu-btn"
      />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon" aria-label="Hamburger menu 'icon'"></span>
      </label>
      <nav className="menu">
        <ul>
          <li>
            <NavLink to={"/"}>Hem</NavLink>
          </li>
          <li>
            <NavLink to={"/booking"}>Boka</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Kontakt</NavLink>
          </li>
          <li>
            <NavLink to={"/admin"}>Admin</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
