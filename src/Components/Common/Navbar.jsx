import { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Cambia el estado del menú
  };

  return (
    <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
      <Link to="/IMPERIO/" className="logo">
        <img
          title="Home"
          id="logo"
          src="/IMPERIO/imperio.png"
          alt="Logo"
          style={{
            width: "180px",
            height: "150px",
            position: "relative",
            left: "50px",
          }}
        />
      </Link>
      <button className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </button>

      {/* Enlaces de navegación */}
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
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

        {/* Buscador dentro del menú */}
        <li className="li-nav search-user">
          <Search />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
