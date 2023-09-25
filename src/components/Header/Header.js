import { NavLink } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <header className="header__nav section">
      <NavLink to="/" className="logo">
        BlogApp
      </NavLink>
      <nav className="nav">
        <NavLink to="/login" className="nav__link">
          Login
        </NavLink>
        <NavLink to="/regester" className="nav__link">
          Regester
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
