import Search from "./Search";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" id="logo"><h1 className="logo">IMPERIO</h1></a>
      <ul className="nav-links">
        <li className="li-nav"><a id="a-nav" href="#">Home</a></li>
        <li className="li-nav"><a id="a-nav" href="#">Nosotros</a></li>
        <li className="li-nav"><a id="a-nav" href="#">Tienda</a></li>
        <li className="li-nav"><a id="a-nav" href="#">Contacto</a></li>
      </ul>
      <div className="search-user">
      <Search />
      <button className="btn-user">Log In</button>
      </div>
    </nav>
  );
}

export default Navbar;
