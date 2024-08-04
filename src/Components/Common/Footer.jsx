export default function Footer() {
  return (
    <footer className="footer">
      <div className="company_info">
        <div className="social-media">
          <a id="a_socialMedia" href="#">
            <img id="img-icon" title="Instagram" src="../src/assets/Instagram.svg" alt="Instagram" />
          </a>
          <a id="a_socialMedia" href="#">
            <img id="img-icon" title="Facebook" src="../src/assets/Facebook.svg" alt="Facebook" />
          </a>
        </div>
        <div className="company-name">
          <a href="#" id="name"><h1 id="company-name">IMPERIO</h1></a>
        </div>
      </div>
      <hr />
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
        <p>Daniela 2024, todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
