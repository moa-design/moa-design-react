import { useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="contenedor-header">

<Link to="/#portada">
  <img
    className="logo"
    src="https://moadesign.com.ar/wp-content/uploads/2025/09/logo-negro.webp"
    alt="logo"
  />
</Link>


    
        <nav>
          <ul
            id="nav-list"
            className={menuOpen ? "active" : ""}
          >
            <li>
              <button onClick={closeMenu}>
                <Link to="/#servicios">Servicios</Link>
              </button>
            </li>
            <li>
              <button onClick={closeMenu}>
                <Link to="/#porfolio">Porfolio</Link>
              </button>
            </li>
            <li>
              <button onClick={closeMenu}>
                <Link to="/contacto">Contacto</Link>
              </button>
            </li>
          </ul>
        </nav>

        <button id="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </button>
      </div>
    </header>
  );
}

export default Navbar;

