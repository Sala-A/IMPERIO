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
        <a href="/" id="name">
          <img
            id="logo-footer"
            src="./imperio.png"
            style={{
              width: "135px",
              height: "110px",
            }}
          />
        </a>
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
      <hr id="hr-footer"/>
      <nav className="footer-nav">
        <a className="a_footer" href="#">
          Nosotros
        </a>
        <a className="a_footer" href="#">
          Tienda
        </a>
        <a className="a_footer" href="#">
          Contacto
        </a>
      </nav>
      <div className="footer-copy">
        <a id="footer-copy" href="#">
          Mapa de navegación de la página
        </a>
        <a id="footer-copy" href="/PrivacyPolicy">
          Daniela 2024, todos los derechos reservados.
        </a>
      </div>
    </footer>
  );
}
