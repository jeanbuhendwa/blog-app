import { NavLink } from "react-router-dom";
import "./header.css";
import { useContext, useEffect } from "react";
import { userContext } from "../UserContext";
const Header = () => {
  const { setUserInfo, userInfo } = useContext(userContext);

  useEffect(() => {
    fetch("http://localhost:5000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  });

  function logout() {
    fetch("http://localhost:5000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header className="header__nav section">
      <NavLink to="/" className="logo">
        BlogApp
      </NavLink>
      <nav className="nav">
        {username && (
          <>
            <NavLink to="/create" className="nav__link">
              Create New Post
            </NavLink>
            <NavLink className="nav__link" onClick={logout}>
              <i class="fa-solid fa-right-from-bracket"></i>
            </NavLink>
          </>
        )}
        {!username && (
          <>
            <NavLink to="/login" className="nav__link">
              Login
            </NavLink>
            <NavLink to="/regester" className="nav__link">
              Regester
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
