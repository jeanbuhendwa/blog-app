import "./header.css";
const Header = () => {
  return (
    <header className="header__nav section">
      <a href="#" className="logo">
        BlogApp
      </a>
      <nav className="nav">
        <a href="#">Login</a>
        <a href="#">Regester</a>
      </nav>
    </header>
  );
};

export default Header;
