export default function Footer() {
  return (
    <footer className="footer">
    <div className="company_info">
    <div className="social-media">
        <a href="#"><img src="../src/assets/Instagram.svg" alt="Instagram" /></a>
        <a href="#"><img src="../src/assets/Facebook.svg" alt="Instagram" /></a>
      </div>
      <div className="company-name">
        <a href="#"></a><h1>IMPERIO</h1>
      </div>
    </div>
      <hr />
      <nav className="footer-nav">
        <a className="a_footer" href="#">Home</a>
        <a className="a_footer" href="#">Nosotros</a>
        <a className="a_footer" href="#">Tienda</a>
        <a className="a_footer" href="#">Contacto</a>
      </nav>
      <div className="footer-copy">
        <p>Daniela 2024, todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
