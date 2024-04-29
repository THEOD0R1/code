import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <nav>
        <ul className="nav__ul">
          <li className="nav__li">
            <NavLink to={"/"}>Hem</NavLink>
          </li>
          <li className="nav__li">
            <NavLink to={"/zoo"}>Zoo</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
