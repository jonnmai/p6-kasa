import logowhite from "../../assets/logo-white.svg";
import '../Footer/Footer.scss'

function Footer() {
  return (
    <footer>
      <img src={logowhite} alt="Logo Kasa" />
      <p>© 2020 Kasa. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
