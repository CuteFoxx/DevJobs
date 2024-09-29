import { Link } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img src="/desktop/logo.svg" alt="Logo" />
        </Link>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Header;
