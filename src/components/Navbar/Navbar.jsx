import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import '../Navbar/Navbar.scss';

function Navbar() {
  return (
    <>
      <header>
        <div className="container">
          <Link to={"/"} className={"logo"}>
            <img src={logo} alt="Logo Kasa" className="logo" />
          </Link>

          <nav>
            <NavLink to={"/"} className={"nav-item"}>Accueil</NavLink>
            <NavLink to={"/about"} className={"nav-item"}>A propos</NavLink>
          </nav>
        </div>
      </header>

    </>
  );
}

export default Navbar;
