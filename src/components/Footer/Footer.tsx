import { Link } from 'react-router-dom';
import Logo2 from 'components/Logo2/Logo2';
import SocFooter from 'components/SocFooter/SocFooter';
import "./Footer.scss";

function Footer() {
  const year = new Date().getFullYear()
  return (
    <section className="Footer">
      <div className="footer-container">
        <div className="f-logo-container">
          <Link to='/'>
            <img className="f-logo" src="/img/logofooter.svg" alt="Logo" />
          </Link>
        </div>
        <Logo2/>
        <SocFooter/>
      </div>
      <div className="copyright">&copy;&nbsp;Copyright. All rights reserved, Atomheads&nbsp;{year}</div>
    </section>
  );
}

export default Footer;
