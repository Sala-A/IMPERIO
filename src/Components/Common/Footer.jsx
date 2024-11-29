import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div
        className="company-name"
        style={{
          flexGrow: "1",
          textAlign: "center",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        <Link to="/" id="name">
          <img
            title="Home"
            id="logo-footer"
            src="./imperio.png"
            style={{
              width: "135px",
              height: "110px",
            }}
          />
        </Link>
      </div>
      <div className="social-media">
        <a className="a_socialMedia" href="instagram.com/">
          <img
            id="img-icon"
            title="Instagram"
            src="../src/assets/Instagram.svg"
            alt="Instagram"
          />
        </a>
        <a id="a_socialMedia" href="https://www.facebook.com/">
          <img
            id="img-icon"
            title="Facebook"
            src="../src/assets/Facebook.svg"
            alt="Facebook"
          />
        </a>
      </div>
      <hr id="hr-footer" />
      <nav className="footer-nav">
        <Link className="a_footer" to="/Nosotros">
          Nosotros
        </Link>
        <Link className="a_footer" to="/Tienda">
          Tienda
        </Link>
        <Link className="a_footer" to="/Contacto">
          Contacto
        </Link>
      </nav>
      <div className="footer-copy">
        <Link id="footer-copy" to="#">
          Mapa de navegación de la página
        </Link>
        <Link id="footer-copy" to="/PrivacyPolicy">
          Daniela 2024, todos los derechos reservados.
        </Link>
      </div>
    </footer>
  );
}
