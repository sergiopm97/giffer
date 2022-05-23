import "./styles/header.scss";
import Fire from "./icons/fire";
import Random from "./icons/random";
import Search from "./icons/search";

function Header() {
  return (
    <header>
      <div className="header-container">
        <a href="/" className="header-container--logo">
          Giffer
        </a>
        <nav>
          <a href="/">
            <Fire />
          </a>
          <a href="/">
            <Random />
          </a>
          <a href="/">
            <Search />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
