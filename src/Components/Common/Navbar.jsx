import { Link } from "react-router-dom";
import Search from "./Search";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img
          title="Home"
          id="logo"
          src="./imperio.png"
          style={{
            width: "180px",
            height: "150px",
            position: "relative",
            left: "50px",
          }}
        />
      </Link>
      <ul className="nav-links">
        <li className="li-nav">
          <Link id="a-nav" to="/Nosotros">
            Nosotros
          </Link>
        </li>
        <li className="li-nav">
          <Link id="a-nav" to="/Tienda">
            Tienda
          </Link>
        </li>
        <li className="li-nav">
          <Link id="a-nav" to="/Contacto">
            Contacto
          </Link>
        </li>
      </ul>
      <div className="search-user">
        <Search />
      </div>
    </nav>
  );
}

export default Navbar;
