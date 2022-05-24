import "./styles/header.scss";
import Fire from "./icons/fire";
import Random from "./icons/random";
import Search from "./icons/search";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-container">
        <NavLink to="/" className="header-container--logo">
          Giffer
        </NavLink>
        <nav>
          <NavLink to="/trending">
            <Fire />
          </NavLink>
          <NavLink to="/random">
            <Random />
          </NavLink>
          <NavLink to="/search">
            <Search />
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
