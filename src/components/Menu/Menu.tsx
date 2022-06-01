import { Link } from "react-scroll";
import Soc from 'components/Soc/Soc';
import Connect from 'components/Connect/Connect';
import { ReactComponent as CloseBtn } from "assets/icons/close-btn.svg";
import './Menu.scss';


function Menu({ toggleMenu }:{toggleMenu: (a:boolean) => void}) {
  return (
    <div className="menu-container">
      <div className="menu-container-inner">
        <CloseBtn className="close-btn" onClick = {() => toggleMenu(false)}/>
        <div className="menu-logo-container">
          <Link to='/'>
            <img className="img1" src="/img/logo-2.svg" alt="logo" />
          </Link>
        </div>
        <nav className="menu-nav">
          <ul className="menu-nav-list">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={1200}
                onClick = {() => toggleMenu(false)}
              >
                  About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="mint"
                spy={true}
                smooth={true}
                offset={0}
                duration={1500}
                onClick = {() => toggleMenu(false)}
              >
                Mint
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="traits"
                spy={true}
                smooth={true}
                offset={0}
                duration={2000}
                onClick = {() => toggleMenu(false)}
              >
              Traits
            </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="details"
                spy={true}
                smooth={true}
                offset={0}
                duration={3000}
                onClick = {() => toggleMenu(false)}
              >
                Details
              </Link>
              </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="faq"
                spy={true}
                smooth={true}
                offset={0}
                duration={3500}
                onClick = {() => toggleMenu(false)}
              >
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
        <Soc/>
        <Connect/>
      </div>
    </div>
  );
}

export default Menu;
