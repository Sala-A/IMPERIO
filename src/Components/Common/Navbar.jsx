import Search from "./Search";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="logo">
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
      </a>
      <ul className="nav-links">
        <li className="li-nav">
          <a id="a-nav" href="#">
            Nosotros
          </a>
        </li>
        <li className="li-nav">
          <a id="a-nav" href="#">
            Tienda
          </a>
        </li>
        <li className="li-nav">
          <a id="a-nav" href="/Contact">
            Contacto
          </a>
        </li>
        <li className="li-nav" id="person">
          <a id="a-img" href="#" title="Log In admin">
            <img src="../src/assets/person.svg" alt="" />
          </a>
        </li>
      </ul>
      <div className="search-user">
        <Search />
      </div>
    </nav>
  );
}

export default Navbar;
